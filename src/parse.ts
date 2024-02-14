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
      console.log(NODE_NAME.TYPE);

      // <type name="LayeredSpellId" text="Full spell Id combining the spell id with the spell layer.">
      //   <field type="SpellId" name="Id" text="Id of the spell" />
      //   <field type="ushort" name="Layer" text="Layer of the spell, seperating multiple instances of the same spell" />
      // </type>

      const new_type: TypeData = {
        "name": node.attributes.name,
        "fields": [],
        "comment": node.attributes.text,
        "primitive": parseBool(node.attributes.primitive),
        "size": Number(node.attributes.size)
      };
      result_cursor = new_type;
      result.types.push(new_type)
    } else if (node.name === NODE_NAME.FIELD) {
      state = STATES.FIELD;
      console.log(NODE_NAME.FIELD);

      // TODO: Remove this once parsing is complete
      if (!result_cursor || !result_cursor.fields) {
        console.log("unimplemented")
        return;
      }
      result_cursor.fields.push({
        "name": node.attributes.name,
        "type": node.attributes.type,
        "comment": node.attributes.text
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

  console.log(result)
  return result;
};
