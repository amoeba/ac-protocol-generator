
export interface ParseResult {
  enums: EnumData[]
  types: TypeData[]
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

export interface Field {
  name: string,
  type: string, // TODO: Should eventually be a type reference
  comment?: string
}

export interface TypeData {
  name: string
  primitive: boolean
  size: number
  fields: Field[]
  comment?: string
}
