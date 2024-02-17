import path from "path";

import { parse } from "./parse";
import { convert } from "./typescript/convert";

export const process = (document: string) => {
  const parsed = parse(document);
  const converted = convert(parsed);

  return converted;
};

const protocol_file = path.join(__dirname, "..", "protocol", "protocol.xml");
const input = Bun.file(protocol_file);
const xml_string = await input.text();

const result = process(xml_string);

const types_file = path.join(__dirname, "..", "generated", "types.ts");
const enums_file = path.join(__dirname, "..", "generated", "enums.ts");

Bun.write(types_file, [result.type_aliases.join("\n"), result.interfaces.join("\n\n")].join("\n\n"));
Bun.write(enums_file, result.enums.join("\n\n"));
