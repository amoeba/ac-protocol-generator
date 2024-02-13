const fs = require("fs");
const path = require("path");
const sax = require("sax");
import ts from "typescript";

// Stuff I extracted
const RESULT = {
  enums: []
}

enum NODE_NAME {
  ENUM = "enum",
  VALUE = "value"
}

enum STATES {
  NONE,
  ENUM,
  VALUE,
}

let state = STATES.NONE;
let current: any = null;

var saxStream = sax.createStream(true, {})

saxStream.on("error", function (e: any) {
  console.error("error!", e)
})

saxStream.on("opentag", function (node: any) {
  if (node.name === NODE_NAME.ENUM) {
    state = STATES.ENUM

    const x = {
      name: node.attributes.name,
      "values": []
    }

    current = x;
    RESULT.enums.push(x)
  } else if (node.name === NODE_NAME.VALUE) {
    state = STATES.VALUE

    current.values.push({
      value: node.attributes.value,
      name: node.attributes.name
    });
  }
})

saxStream.on("closetag", function (node: any) {
  if (node.name === NODE_NAME.ENUM) {
    state = STATES.NONE
    current = null;
  }
})

const xml = fs.readFileSync(path.join(__dirname, 'protocol.xml'), 'utf8');
saxStream.write(xml);

function print(nodes) {
  const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });
  const resultFile = ts.createSourceFile(
    "temp.ts",
    "",
    ts.ScriptTarget.Latest,
    false,
    ts.ScriptKind.TSX
  );

  console.log(printer.printList(ts.ListFormat.MultiLine, nodes, resultFile));
}

const createEnumMember = function (enum_member) {
  // ts.factory.expression
  // const expr = ts.factory.createExpressionStatement()
  return ts.factory.createEnumMember(
    enum_member.name,
    ts.factory.createNumericLiteral(Number(enum_member.value)));

}

const createEnum = function (enum_data) {
  const aId = ts.factory.createIdentifier(enum_data.name);
  const enum_decl = ts.factory.createEnumDeclaration(
  /*modifiers*/ undefined,
  /*name*/aId,
  /*members*/enum_data.values.map(x => createEnumMember(x)))

  return enum_decl;
}

const x = RESULT.enums.map(e => createEnum(e));
print(x);
