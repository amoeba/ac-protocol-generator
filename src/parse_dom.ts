const parseString = require('xml2js').parseString;

const doc = await Bun.file("./protocol/protocol.xml").text()

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

// enum
const parseEnumValue = (x) => {
  return {
    name: x.$.name,
    value: x.$.value
  }
}
const parseEnum = (x) => {
  return {
    name: x.$.name,
    comment: x.$.text,
    members: x.value.map(parseEnumValue)
  }
}

// type
// <type name="Vector3">
// <field type="float" name="X" />
// <field type="float" name="Y" />
// <field type="float" name="Z" />
// </type>

const parseField = x => {
  return {
    name: x.$.name,
    comment: x.$.text,
    type: x.$.type
  }
}

const parseType = x => {
  return {
    name: x.$.name,
    comment: x.$.text,
    fields: x.field.map(parseField)
  }
}


let output;

parseString(doc, function (err, result) {
  output = result;
});

// console.log(JSON.stringify(output.schema.enums[0].enum[0]));
// console.log(parseEnum(output.schema.enums[0].enum[0]))
// console.log(output.schema.types[0].type[27])
console.log(parseType(output.schema.types[0].type[27]))
