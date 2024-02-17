import type { EnumMember } from "typescript"

export interface StringIndexedDict<V> {
  [key: string]: V
}

export interface ParseResult {
  enums: StringIndexedDict<EnumData>,
  interfaces: StringIndexedDict<InterfaceData>
  type_aliases: StringIndexedDict<TypeAliasData>
}

export interface EnumValue {
  name: string,
  value: string,
  comment?: string
}

export interface EnumData {
  name: string,
  comment?: string,
  members: EnumValue[]
}

export interface InterfaceData {
  name: string
  primitive: boolean
  size: number
  fields: FieldData[]
  comment?: string
}

export interface FieldData {
  name: string,
  type: string, // TODO: Should eventually be a type reference
  comment?: string
}
export interface TypeAliasData {
  name: string,
  type: string,
}
