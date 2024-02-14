import sax from "sax";
import type { ParseResult } from "./types";
import { parseSignedHexString } from "./util";

enum NODE_NAME {
  ENUM = "enum",
  VALUE = "value",
}

enum STATES {
  NONE = 0,
  ENUM = 1,
  VALUE = 2,
}

export const parse = (xml: string): ParseResult => {
  // result is passed into our SAX parser's callbacks so the structure of this
  // function is set up to allow that
  const result: ParseResult = {
    enums: [],
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
