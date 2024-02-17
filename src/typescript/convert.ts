import type { ParseResult, EnumData, TypeAliasData, InterfaceData } from "../types";
import { createEnumDeclaration, createTypeAliasDeclaration, createInterfaceDeclaration } from "./declarations";
import { printNode } from "./print";

export const convert = (result: ParseResult) => {
  const enums = Object.values(result.enums).map((e: EnumData) => createEnumDeclaration(e));
  const type_aliases = Object.values(result.type_aliases).map((e: TypeAliasData) => createTypeAliasDeclaration(e));
  const interfaces = Object.values(result.interfaces).map((t: InterfaceData) => createInterfaceDeclaration(t));

  return {
    enums: enums.map(n => printNode(n)),
    type_aliases: type_aliases.map(n => printNode(n)),
    interfaces: interfaces.map(n => printNode(n))
  }
}
