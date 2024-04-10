import React, { useState } from 'react';

export default function TextForm(props) {

	const handleUpCase = () => {
		const newText = text.toUpperCase();
		setText(newText);
		props.showAlert(":Converted to upper Case", "success");
	}
	const handleLoCase = () => {
		const newText = text.toLowerCase();
		setText(newText);
		props.showAlert(":Converted to lower Case ", "success");


	}
	const handleClear = () => {
		setText("");
		props.showAlert(":Cleared!!", "success");
	}
	const handleCopy = () => {
		let text = document.querySelector('#mybox');
		text.select();
		navigator.clipboard.writeText(text.value);
		document.getSelection().removeAllRanges();
		props.showAlert(":Copied to clipboard! ", "success");
	}
	const handleExtraSpace = () => {
		let newText = text.split(/[ ]+/);
		setText(newText.join(" "));
		props.showAlert(":Extra spaces cleared !", "success");
	}
	const handleCountSpaces = () => {
		const spaceCount = text.split(" ").length - 1;
		props.showAlert(`:Space count: ${spaceCount}`, "info");
	}

	const handleOnChange = (event) => {
		setText(event.target.value);
	}

	const [text, setText] = useState("");

	return (
		<>
			<div className="container" style={{ color: props.Mode === 'dark' ? 'white' : 'rgb(41 45 48)' }}>
				<div className="my-3">
					<h1>{props.heading}</h1>
					<textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.Mode === 'dark' ? 'rgb(41 45 48)' : 'white', color: props.Mode === 'dark' ? 'white' : 'rgb(41 45 48)' }} id="mybox" rows="8"></textarea>
				</div>
				<button disabled={text.length === 0} className="btn btn-primary mx-1 my-2" onClick={handleUpCase}>Convert to uppserCase</button>

				<button disabled={text.length === 0} className="btn btn-primary mx-1 my-2" onClick={handleLoCase}>Convert to LowerCase</button>
				<button disabled={text.length === 0} className="btn btn-primary mx-1 my-2" onClick={handleClear}>Clear</button>
				<button disabled={text.length === 0} className="btn btn-primary mx-1 my-2" onClick={handleCopy}>Copy Text</button>
				<button disabled={text.length === 0} className="btn btn-primary mx-1 my-2" onClick={handleExtraSpace}>Clear Extra Space</button>
				<button disabled={text.length === 0} className="btn btn-primary mx-1 my-2" onClick={handleCountSpaces}>Count spaces</button>
			</div >
			<div className="container my-3" style={{ color: props.Mode === 'dark' ? 'white' : 'rgb(41 45 48)' }}>
				<h2>Text Analysis</h2>
				<p>{text.split(/\s+/).filter(word => word.length > 0).length} words and {text.length} charcaters</p>
				<p>{0.008 * text.split(" ").filter(word => word.length > 0).length} minutes </p>
				<h2>Preview</h2>
				<p>{text.length > 0 ? text : "Nothig to preview"}</p>

			</div>
		</>
	)
}
