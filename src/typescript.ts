import ts from "typescript";

import type { EnumData, EnumValue, ParseResult, TypeData } from "./types";
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

const createTypeMember = (field_data: FieldData) => {
  const id = ts.factory.createIdentifier(field_data.name);
  const nameProp = ts.factory.createPropertySignature(
    undefined,
    id,
    undefined,
    ts.factory.createTypeReferenceNode("string")
  );

  if (field_data.comment) {
    ts.addSyntheticLeadingComment(
      nameProp,
      ts.SyntaxKind.MultiLineCommentTrivia,
      field_data.comment,
      true,
    );
  }

  return nameProp;
}

const createType = (type_data: TypeData): ts.InterfaceDeclaration => {
  const id = ts.factory.createIdentifier(type_data.name);
  const members = type_data.fields.map(f => createTypeMember(f));

  const interface_decl = ts.factory.createInterfaceDeclaration(
    /*modifiers*/undefined,
    /*name*/type_data.name,
    /*typeParameters*/undefined,
    /*heritageClauses*/undefined,
    members
  )

  if (type_data.comment) {
    ts.addSyntheticLeadingComment(
      interface_decl,
      ts.SyntaxKind.MultiLineCommentTrivia,
      type_data.comment,
      true,
    );
  }

  return interface_decl;
}

function print(nodes: ts.NodeArray<ts.Node>) {
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

export const convert = (result: ParseResult): string => {
  const enums = result.enums.map((e: EnumData) => createEnum(e));
  const types = result.types.map((t: TypeData) => createType(t));

  const x = [...enums, ...types];

  return print(x)
}
