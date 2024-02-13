const path = require("path")

import { process } from "./src/process"

const protocol_file = path.join(__dirname, "protocol.xml")
const out_file = path.join(__dirname, "generated", "protocol.ts")

const input = Bun.file(protocol_file);

const xml = await input.text()
const result = process(xml);

Bun.write(out_file, result)
