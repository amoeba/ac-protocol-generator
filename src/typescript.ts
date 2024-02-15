import ts, { type EnumDeclaration, type InterfaceDeclaration } from "typescript";

import type { EnumData, EnumValue, FieldData, ParseResult, TypeData } from "./types";
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
    /*modifiers*/[ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
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

  ts.flags
  const interface_decl = ts.factory.createInterfaceDeclaration(
    /*modifiers*/[ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
    /*name*/id,
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

function printNode(printer: ts.Printer, node: ts.Node) {

  // I have no idea why this is involved at all, this doesn't read or write to
  // the file
  const useless_file = ts.createSourceFile(
    /*fileName*/ "./protocol.ts",
    /*sourceText*/"",
    /*languageVersionOrOptions*/ts.ScriptTarget.Latest,
    /*setParentNodes*/false,
    /*scriptKind*/ts.ScriptKind.TSX,
  );

  return printer.printNode(ts.EmitHint.Unspecified, node, useless_file);
}

export const convert = (result: ParseResult) => {
  const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });

  const enums = result.enums.map((e: EnumData) => createEnum(e));
  const types = result.types.map((t: TypeData) => createType(t));

  return {
    enums: enums.map(n => printNode(printer, n)),
    types: types.map(n => printNode(printer, n))
  }
}
