import ts from "typescript";
import type { EnumValue, EnumData, FieldData, InterfaceData, TypeAliasData } from "../types";
import { parseSignedHexString } from "../util";

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

export const createEnumDeclaration = (enum_data: EnumData) => {
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

const createInterfaceMember = (field_data: FieldData) => {
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

export const createInterfaceDeclaration = (interface_data: InterfaceData): ts.InterfaceDeclaration => {
  const id = ts.factory.createIdentifier(interface_data.name);
  const members = interface_data.fields.map((f: FieldData) => createInterfaceMember(f));
  const interface_decl = ts.factory.createInterfaceDeclaration(
    /*modifiers*/[ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
    /*name*/id,
    /*typeParameters*/undefined,
    /*heritageClauses*/undefined,
    members
  )

  if (interface_data.comment) {
    ts.addSyntheticLeadingComment(
      interface_decl,
      ts.SyntaxKind.MultiLineCommentTrivia,
      interface_data.comment,
      true,
    );
  }

  return interface_decl;
}

const getKeywordTypeNodeForTypeAlias = (type_alias_data: TypeAliasData) => {
  const parent = type_alias_data.type;

  if (parent === "string") {
    return ts.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword);
  }

  if (parent === "ushort" || parent === "uint") {
    return ts.factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword);
  }

  // return ts.factory.createKeywordTypeNode(ts.SyntaxKind.)
  return ts.factory.createTypeReferenceNode(parent, undefined)


}

export const createTypeAliasDeclaration = (type_alias_data: TypeAliasData): ts.TypeAliasDeclaration => {
  const id = ts.factory.createIdentifier(type_alias_data.name);
  const interface_decl = ts.factory.createTypeAliasDeclaration(
    /* modifiers */[ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
    /* name */ id,
    /* typeParameters */ undefined,
    /* type */getKeywordTypeNodeForTypeAlias(type_alias_data)
  );

  return interface_decl;
}

/*
  For any type, we might want to make one of:

  1. A type alias
  2. An interface
  3. A class (not implemented yet)
*/
export const createDeclarationForType = (x) => {

  if (Object.keys(x).includes("type")) {
    // Is a type alias
    return createTypeAliasDeclaration(x);
  }

  return createInterfaceDeclaration(x)

  // Classes are not implemented
}
