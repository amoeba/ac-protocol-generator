import { parseDoc, parseEnums, parseTypes } from "./parse";
import { convert } from "./typescript/convert";
import { createDeclarationForType, createEnumDeclaration, createInterfaceDeclaration } from "./typescript/declarations";
import { printNode } from "./typescript/print";

const doc = await Bun.file("./protocol/protocol.xml").text()

// TODO: Save this as we're eventually going to go through all of these
// console.log(output.schema.enums[0].enum[0])
// console.log(output.schema.types[0].type)
// console.log(output.schema.gameactions[0].type)
// console.log(output.schema.gameevents[0].type)
// console.log(output.schema.messages[0].type)
// console.log(output.schema.packets[0].type)

const parsed_doc = parseDoc(doc)

// enums
const all_enums = parseEnums(parsed_doc.schema.enums[0].enum)
const enum_decls = all_enums.map(createEnumDeclaration)
const enum_delcs_printed = enum_decls.map(printNode)
const enum_file = Bun.file("./generated/enums.ts")
Bun.write(enum_file, enum_delcs_printed.join("\n\n"));

// types
const all_types = parseTypes(parsed_doc.schema.types[0].type)
const type_decls = all_types.map(createDeclarationForType)
const type_delcs_printed = type_decls.map(printNode)
const types_file = Bun.file("./generated/types.ts")
Bun.write(types_file, type_delcs_printed.join("\n\n"))
