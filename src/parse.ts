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

const parseEnums = x => {
  return x.map(parseEnum)
}

const parseField = x => {
  return {
    name: x.$.name,
    comment: x.$.text,
    type: x.$.type
  }
}

const parseType = x => {
  return {
    name: x.$.name,
    comment: x.$.text,
    fields: x.field.map(parseField)
  }
}

// TODO: Encapsulate this better
const doc = await Bun.file("./protocol/protocol.xml").text()

const parse_doc = (x: string) => {
  let output = "";

  parseString(doc, (err: Error, result: string) => {
    if (err) {
      throw new Error(err.message)
    }

    output = result;
  });

  return output;
}

const parsed_doc = parse_doc(doc)

// TODO: Save this as we're eventually going to go through all of these
// console.log(output.schema.enums[0].enum[0])
// console.log(output.schema.types[0].type)
// console.log(output.schema.gameactions[0].type)
// console.log(output.schema.gameevents[0].type)
// console.log(output.schema.messages[0].type)
// console.log(output.schema.packets[0].type)

const all_enums = parseEnums(parsed_doc.schema.enums[0].enum)
console.log(all_enums[0])
const enum_decls = all_enums.map(createEnumDeclaration)
const enum_delcs_printed = enum_decls.map(printNode)
const enum_file = Bun.file("./generated/enums.ts")
Bun.write(enum_file, enum_delcs_printed.join("\n\n"));
