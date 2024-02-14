
import { expect, test } from "bun:test";

import { parseSignedHexString } from "../src/util.ts"

test("2 + 2", () => {
  expect(parseSignedHexString("0x0")).toBe(0);
  expect(parseSignedHexString("0x4")).toBe(4);
  expect(parseSignedHexString("0xFF")).toBe(255);
  expect(parseSignedHexString("-0x4")).toBe(-4);
});
