import ts from "typescript";

export function printNode(node: ts.Node) {
  // We re-created on each call just to make it easy to print a single node
  const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });

  // I have no idea why this is involved at all, this doesn't read or write to
  // the file
  const useless_file = ts.createSourceFile(
    /*fileName*/ "./protocol.ts",
    /*sourceText*/"",
    /*languageVersionOrOptions*/ts.ScriptTarget.Latest,
    /*setParentNodes*/false,
    /*scriptKind*/ts.ScriptKind.TSX,
  );

  return printer.printNode(ts.EmitHint.Unspecified, node, useless_file);
}
