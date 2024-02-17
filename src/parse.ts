import { createEnumDeclaration } from "./typescript/declarations";
import { printNode } from "./typescript/print";
import { parseSignedHexString } from "./util";

const parseString = require('xml2js').parseString;

const enumFieldFilter = (x) => {
  if (x.$.value.includes("|")) {
    return false;
  }

  if (Number.isNaN(parseSignedHexString(x.$.value))) {
    return false;
  }

  return true;
}

const parseEnumValue = (x) => {
  return {
    name: x.$.name,
    comment: x.$.text,
    value: x.$.value
  }
}

const parseEnum = (x) => {
  return {
    name: x.$.name,
    comment: x.$.text,
    members: x.value.filter(enumFieldFilter).map(parseEnumValue)
  }
}

export const parseEnums = x => {
  return x.map(parseEnum)
}

const parseField = x => {
  return {
    name: x.$.name,
    comment: x.$.text,
    type: x.$.type
  }
}

const parseTypeAlias = x => {
  return {
    name: x.$.name,
    comment: x.$.text,
    type: x.$.parent || x.$.primitive
  }
}

const typeAliasNames = ["WString", "WORD", "DWORD", "PackedDWORD", "PackedWORD", "ObjectId", "LandcellId", "SpellId", "DataId"]

const parseType = x => {
  // Type aliases are handled specially
  if (typeAliasNames.includes(x.$.name)) {
    return parseTypeAlias(x)
  }

  return {
    name: x.$.name,
    comment: x.$.text,
    fields: x.field.map(parseField)
  }
}
const skippedTypeNames = ["bool", "byte", "short", "ushort", "int", "uint", "long", "ulong", "float", "double", "string"]
const typeNameFilter = (x) => {
  return !skippedTypeNames.includes(x.$.name)
}

export const parseTypes = x => {
  return x.filter(typeNameFilter).map(parseType)
}

export const parseDoc = (doc: string) => {
  let output = "";

  parseString(doc, (err: Error, result: string) => {
    if (err) {
      throw new Error(err.message)
    }

    output = result;
  });

  return output;
}
