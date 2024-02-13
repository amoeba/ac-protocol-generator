
const fs = require("fs");
const path = require("path");
const sax = require("sax");
import ts from "typescript";

import type { ParseResult, EnumData, EnumValue } from "./types"

const createEnumMember = function (member: EnumValue) {
  return ts.factory.createEnumMember(
    member.name,
    ts.factory.createNumericLiteral(Number(member.value)));
}

const createEnum = function (enum_data: EnumData) {
  const id = ts.factory.createIdentifier(enum_data.name);
  const enum_decl = ts.factory.createEnumDeclaration(
  /*modifiers*/ undefined,
  /*name*/ id,
  /*members*/ enum_data.members.map((x: any) => createEnumMember(x)))

  return enum_decl;
}

const convert = function (x) {
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

  print(x.enums.map(e => createEnum(e)));
}

const parse = function (xml: string): ParseResult {
  const result: ParseResult = {
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
        "members": []
      }

      current = x;
      result.enums.push(x)
    } else if (node.name === NODE_NAME.VALUE) {
      state = STATES.VALUE

      current.members.push({
        name: node.attributes.name,
        value: node.attributes.value,
      });
    }
  })

  saxStream.on("closetag", function (node: any) {
    if (node.name === NODE_NAME.ENUM) {
      state = STATES.NONE
      current = null;
    }
  })

  saxStream.write(xml);

  return result;
}

export const process = function (file_path: string) {
  const xml = fs.readFileSync(file_path, 'utf8');
  const result = parse(xml);
  convert(result);
}
