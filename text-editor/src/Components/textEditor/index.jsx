import React, { useState } from "react";
import RichTextEditor, { getTextAlignClassName } from "react-rte";
import "./index.css";

const toolbarConfig = {
	// Optionally specify the groups to display (displayed in the order listed).
	display: [
		"INLINE_STYLE_BUTTONS",
		"BLOCK_ALIGNMENT_BUTTONS",
		"BLOCK_TYPE_BUTTONS",
		"BLOCK_TYPE_DROPDOWN",
		"HISTORY_BUTTONS",
	],
	INLINE_STYLE_BUTTONS: [
		{ label: "Bold", style: "BOLD", className: "custom-css-class" },
		{ label: "Italic", style: "ITALIC" },
		{ label: "Strikethrough", style: "STRIKETHROUGH" },
		{ label: "Monospace", style: "CODE" },
		{ label: "Underline", style: "UNDERLINE" },
	],
	BLOCK_ALIGNMENT_BUTTONS: [
		{ label: "Align Left", style: "ALIGN_LEFT" },
		{ label: "Align Center", style: "ALIGN_CENTER" },
		{ label: "Align Right", style: "ALIGN_RIGHT" },
		{ label: "Align Justify", style: "ALIGN_JUSTIFY" },
	],
	BLOCK_TYPE_DROPDOWN: [
		{ label: "Normal", style: "unstyled" },
		{ label: "Heading Large", style: "header-one" },
		{ label: "Heading Medium", style: "header-two" },
		{ label: "Heading Small", style: "header-three" },
	],
	BLOCK_TYPE_BUTTONS: [
		{ label: "UL", style: "unordered-list-item" },
		{ label: "OL", style: "ordered-list-item" },
		{ label: "Blockquote", style: "blockquote" },
	],
};

const MyStatefulEditor = () => {
	const [value, setValue] = useState(RichTextEditor.createEmptyValue());
	const onChange = (value) => {
		setValue(value);
	};
	return (
		<div className="text-editor-wrapper">
			<div className="text-editor-heading">Text Editor</div>
			<RichTextEditor
				value={value}
				onChange={onChange}
				toolbarConfig={toolbarConfig}
				blockStyleFn={getTextAlignClassName}
				className="text-editor-textarea"
			/>
		</div>
	);
};

export default MyStatefulEditor;
