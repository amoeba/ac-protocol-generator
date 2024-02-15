import sax from "sax";
import type { ParseResult, TypeData } from "./types";
import { parseBool, parseSignedHexString } from "./util";

enum NODE_NAME {
  ENUM = "enum",
  VALUE = "value",
  TYPES = "types",
  TYPE = "type",
  FIELD = "field"
}

enum STATES {
  NONE = 0,
  ENUM = 1,
  VALUE = 2,
  TYPE = 3,
  FIELD = 4,
}

// Skip types already defined by the runtime
const ignored_type_names = [
  "bool",
  "byte",
  "short",
  "ushort",
  "int",
  "uint",
  "long",
  "ulong",
  "float",
  "double",
  "string",
]

export const parse = (xml: string): ParseResult => {
  // result is passed into our SAX parser's callbacks so the structure of this
  // function is set up to allow that
  const result: ParseResult = {
    enums: [],
    types: [],
  };

  // Keep a cursor into result
  let result_cursor: any = null;

  // State machine
  let state = STATES.NONE;

  // Build SAX stream parser
  const saxStream = sax.createStream(
    /*strict*/true,
    {}
  );

  saxStream.on("error", (e: any) => {
    console.error("error!", e);
  });

  saxStream.on("opentag", (node: any) => {
    if (node.name === NODE_NAME.ENUM) {
      state = STATES.ENUM;

      const new_enum = {
        name: node.attributes.name,
        comment: node.attributes.text,
        members: [],
      };

      result_cursor = new_enum;
      result.enums.push(new_enum);
    } else if (node.name === NODE_NAME.VALUE) {
      state = STATES.VALUE;

      // Ignore union enums ACE made up
      if (
        node.attributes.value.includes("|") ||
        Number.isNaN(parseSignedHexString(node.attributes.value))
      ) {
        return;
      }

      result_cursor.members.push({
        name: node.attributes.name,
        value: node.attributes.value,
        comment: node.attributes.text,
      });
    } else if (node.name === NODE_NAME.TYPES) {
      // TODO: Change this once I figure out what I want to do
      result_cursor = null;
    } else if (node.name === NODE_NAME.TYPE) {
      state = STATES.TYPE;

      // Skip ignored types
      if (ignored_type_names.findIndex(n => n === node.attributes.name) >= 0) {
        return;
      }

      const new_type: TypeData = {
        name: node.attributes.name,
        fields: [],
        comment: node.attributes.text,
        primitive: parseBool(node.attributes.primitive),
        size: Number(node.attributes.size)
      };
      result_cursor = new_type;
      result.types.push(new_type)
    } else if (node.name === NODE_NAME.FIELD) {
      state = STATES.FIELD;

      // TODO: Remove this once parsing is complete
      if (!result_cursor || !result_cursor.fields) {
        return;
      }
      result_cursor.fields.push({
        name: node.attributes.name,
        type: node.attributes.type,
        comment: node.attributes.text
      })
    }
  });

  saxStream.on("closetag", (node: any) => {
    if (node.name === NODE_NAME.ENUM) {
      state = STATES.NONE;
      result_cursor = null;
    }
  });

  saxStream.write(xml);

  return result;
};
