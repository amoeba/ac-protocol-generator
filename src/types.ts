
export interface ParseResult {
  enums: EnumData[]
}

export interface EnumValue {
  name: string,
  value: string
}

export interface EnumData {
  name: string,
  members: EnumValue[]
}
