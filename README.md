# ac-protocol-generator

Generates TypeScript (and possibly other) language-bindings from Asheron's Call protocol.xml files.

## Status

Languages:

- [x] Typescript. See [./generated/protocol.ts](./generated/protocol.ts)

Protocol Elements:

- [x] Enums
- [ ] Types
  - [ ] Base Types
    - [ ] maskmap nodes
    - [ ] genericType attributes
  - [ ] GameActions
  - [ ] GameEvents
  - [ ] Messsages
    - [ ] C2S
    - [ ] S2C
    - [ ] Packets

## Running

Requires Bun.

```sh
bun install
bun run index.ts
```
