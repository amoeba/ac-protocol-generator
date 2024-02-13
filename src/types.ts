
export interface ParseResult {
  enums: EnumData[]
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
