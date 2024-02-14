import path from "path";

import { parse } from "./parse";
import { convert } from "./typescript";

export const process = (document: string) => {
  const parsed = parse(document);
  const converted = convert(parsed);

  return converted;
};

const protocol_file = path.join(__dirname, "..", "protocol", "protocol.xml");
const out_file = path.join(__dirname, "..", "generated", "protocol.ts");

const input = Bun.file(protocol_file);
const xml = await input.text();

const result = process(xml);

Bun.write(out_file, result);
