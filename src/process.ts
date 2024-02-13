const sax = require("sax");
import ts from "typescript";

import type { ParseResult, EnumData, EnumValue } from "./types";

const parseSignedHexString = (text: string) => {
  let out: number;

  if (text.includes("-")) {
    out = -Number(text.replace("-", ""));
  } else {
    out = Number(text);
  }
  console.log(text, out)

  return out;
}

const createEnumMember = (member: EnumValue) => {

  const node = ts.factory.createEnumMember(
    member.name,
    ts.factory.createNumericLiteral(parseSignedHexString(member.value)),
  );

  if (member.comment) {
    ts.addSyntheticLeadingComment(
      node,
      ts.SyntaxKind.MultiLineCommentTrivia,
      member.comment,
      true,
    );
  }

  return node;
};

const createEnum = (enum_data: EnumData) => {
  const id = ts.factory.createIdentifier(enum_data.name);
  const node = ts.factory.createEnumDeclaration(
		/*modifiers*/ undefined,
		/*name*/ id,
		/*members*/ enum_data.members.map((x: any) => createEnumMember(x)),
  );

  if (enum_data.comment) {
    ts.addSyntheticLeadingComment(
      node,
      ts.SyntaxKind.MultiLineCommentTrivia,
      enum_data.comment,
      true,
    );
  }

  return node;
};

function print(nodes: ts.EnumDeclaration[]) {
  const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });
  const resultFile = ts.createSourceFile(
		/*does nothing?*/ "temp.ts",
    "",
    ts.ScriptTarget.Latest,
    false,
    ts.ScriptKind.TSX,
  );

  return printer.printList(ts.ListFormat.MultiLine, nodes, resultFile);
}

const convert = (result: ParseResult): string => print(result.enums.map((e: EnumData) => createEnum(e)));

const parse = (xml: string): ParseResult => {
  // result is passed into our SAX parser's callbacks so the structure of this
  // function is set up to allow that
  const result: ParseResult = {
    enums: [],
  };

  // Keep a cursor into result
  let result_cursor: any = null;

  enum NODE_NAME {
    ENUM = "enum",
    VALUE = "value",
  }

  // State
  enum STATES {
    NONE = 0,
    ENUM = 1,
    VALUE = 2,
  }
  let state = STATES.NONE;

  // Build SAX stream parser
  var saxStream = sax.createStream(/*strict*/ true, {});

  saxStream.on("error", (e: any) => {
    console.error("error!", e);
  });

  saxStream.on("opentag", (node: any) => {
    if (node.name === NODE_NAME.ENUM) {
      state = STATES.ENUM;

      const new_enum = {
        name: node.attributes.name,
        comment: node.attributes.text,
        members: [],
      };

      result_cursor = new_enum;
      result.enums.push(new_enum);
    } else if (node.name === NODE_NAME.VALUE) {
      state = STATES.VALUE;

      // Ignore union enums ACE made up
      if (node.attributes.value.includes("|")) {
        return;
      }

      result_cursor.members.push({
        name: node.attributes.name,
        value: node.attributes.value,
        comment: node.attributes.text,
      });
    }
  });

  saxStream.on("closetag", (node: any) => {
    if (node.name === NODE_NAME.ENUM) {
      state = STATES.NONE;
      result_cursor = null;
    }
  });

  // Use it
  saxStream.write(xml);

  return result;
};

export const process = (document: string) => {
  const result = parse(document);

  return convert(result);
};
