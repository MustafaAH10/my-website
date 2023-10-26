// CodeBlock.js
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";

function CodeBlock({ code }) {
	return (
		<SyntaxHighlighter language="javascript" style={solarizedlight}>
			{code}
		</SyntaxHighlighter>
	);
}

export default CodeBlock;
