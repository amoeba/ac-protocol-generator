const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const doc = await Bun.file("./protocol/protocol.xml").text()
const dom = new JSDOM(doc);

// TODO
//
// enums (enum)
// types (type)
// gameactions (type)
// gameevents (type)
// messages
//   c2s (type)
//   s2c (type)
// packets (type)

const parseEnumValue = (x) => {
  return {
    name: x.getAttribute("name"),
    value: x.getAttribute("value")
  }
}
const parseEnum = (x) => {
  const values = Object.values(x.querySelectorAll("value"))

  return {
    name: x.getAttribute("name"),
    members: Object.values(values).map(parseEnumValue)
  }
}
const enums = dom.window.document.querySelectorAll("enums > enum");
const result = Object.values(enums).map(parseEnum)

console.log(result)
