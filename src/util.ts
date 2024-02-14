export const parseSignedHexString = (text: string) => {
  let out: number;

  if (text.includes("-")) {
    out = -Number(text.replace("-", ""));
  } else {
    out = Number(text);
  }

  return out;
}

export const parseBool = (text: string) => {
  return text === "true"
}
