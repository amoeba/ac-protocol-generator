import sax from "sax";
import type { InterfaceData, ParseResult, TypeAliasData } from "./types";
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

// These types should just be aliased to existing types and not have new
// interfaces created for them
const types_to_alias = [
  "WString",
  "WORD",
  "DWORD",
  "ObjectId",
  "LandcellId",
  "SpellId",
  "PackedWORD",
  "PackedDWORD"
]

export const parse = (xml: string): ParseResult => {
  // result is passed into our SAX parser's callbacks so the structure of this
  // function is set up to allow that
  const result: ParseResult = {
    enums: {},
    type_aliases: {},
    interfaces: {}
  };

  // Store a key to object we're in the middle of creating. This is needed
  // because the SAX parser approach needs more context
  let context = "";

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

      context = new_enum.name;
      result.enums[new_enum.name] = new_enum;
    } else if (node.name === NODE_NAME.VALUE) {
      state = STATES.VALUE;

      // Ignore union enums ACE made up
      if (
        node.attributes.value.includes("|") ||
        Number.isNaN(parseSignedHexString(node.attributes.value))
      ) {
        return;
      }

      const member = {
        name: node.attributes.name,
        value: node.attributes.value,
        comment: node.attributes.text,
      };

      result.enums[context].members.push(member);
    } else if (node.name === NODE_NAME.TYPE) {
      state = STATES.TYPE;

      // Skip ignored types
      if (ignored_type_names.findIndex(n => n === node.attributes.name) >= 0) {
        return;
      }

      // Handle type aliases first
      if (types_to_alias.findIndex(n => n === node.attributes.name) >= 0) {
        const new_type: TypeAliasData = {
          name: node.attributes.name,
          type: node.attributes.parent || node.attributes.primitive,
        };
        context = new_type.name;
        result.type_aliases[context] = new_type;
      } else {
        const new_type: InterfaceData = {
          name: node.attributes.name,
          fields: [],
          comment: node.attributes.text,
          primitive: parseBool(node.attributes.primitive),
          size: Number(node.attributes.size)
        };
        context = new_type.name;
        result.interfaces[new_type.name] = new_type;
      }
    } else if (node.name === NODE_NAME.FIELD) {
      state = STATES.FIELD;

      const new_field = {
        name: node.attributes.name,
        type: node.attributes.type,
        comment: node.attributes.text
      };

      result.interfaces[context].fields.push(new_field);
    }
  });

  saxStream.on("closetag", (node: any) => {
    if (node.name === NODE_NAME.ENUM) {
      state = STATES.NONE;
      context = "";
    }
  });

  saxStream.write(xml);

  return result;
};
