import ts from "typescript";

import type { EnumData, EnumValue, ParseResult } from "./types";
import { parseSignedHexString } from "./util.ts"

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

export const convert = (result: ParseResult): string => print(result.enums.map((e: EnumData) => createEnum(e)));
