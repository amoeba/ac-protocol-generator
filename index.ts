const path = require("path")

import { process } from "./src/process"

const protocol_file = path.join(__dirname, "protocol.xml")
process(protocol_file);
