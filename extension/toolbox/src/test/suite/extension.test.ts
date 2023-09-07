import * as assert from 'assert';
import * as path from 'path';
import * as fs from "fs";

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';

suite('Extension Test Suite', () => {
	vscode.window.showInformationMessage('Start all tests.');
	vscode.window.showOpenDialog().then((uri) => {
		console.log("uri=", uri);
		const currentPanel = vscode.window.createWebviewPanel(
			'ccimageToolBox', // Identifies the type of the webview. Used internally
			"Tool Box", // Title of the panel displayed to the user
			vscode.ViewColumn.One, // Editor column to show the new webview panel in.
			{ 
				enableScripts: true,
				localResourceRoots: [
				  vscode.Uri.file(path.join('../../../../', 'media'))
				]
			} // Webview options. More on these later.
		);
		// And set its HTML content
		currentPanel.webview.html = readIndex();
	});

	test('Sample test', () => {
		assert.strictEqual([1, 2, 3].indexOf(5), -1);
		assert.strictEqual([1, 2, 3].indexOf(0), -1);
	});
	
});

function readIndex() {
	console.log("base = ", path.basename("."));
    const htmlText = fs.readFileSync("../../../../media/index.html");
	console.log("html = ", htmlText);
    return htmlText.toString();
}