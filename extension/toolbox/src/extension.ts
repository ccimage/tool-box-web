"use strict";
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import * as path from "path";
import * as fs from "fs";

// Track currently webview panel
let currentPanel: vscode.WebviewPanel | undefined = undefined;

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    //console.log('Congratulations, your extension "jsonviewer" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand("extension.openToolBox", () => {
        // The code you place here will be executed every time your command is executed

        const columnToShowIn = vscode.window.activeTextEditor ? vscode.window.activeTextEditor.viewColumn : undefined;

        // let editor = vscode.window.activeTextEditor;
        // if (!editor) {
        //     return; // No open text editor
        // }

        if (currentPanel) {
            // If we already have a panel, show it in the target column
            currentPanel.reveal(columnToShowIn);
            currentPanel.webview.html = readIndex(context.extensionPath, currentPanel.webview);
        } else {
            // Create and show a new webview
            currentPanel = vscode.window.createWebviewPanel(
                "ccimageToolBox", // Identifies the type of the webview. Used internally
                "Tool Box", // Title of the panel displayed to the user
                vscode.ViewColumn.One, // Editor column to show the new webview panel in.
                {
                    enableScripts: true,
                    localResourceRoots: [vscode.Uri.file(path.join(context.extensionPath, "media"))],
                } // Webview options. More on these later.
            );
            // And set its HTML content
            currentPanel.webview.html = readIndex(context.extensionPath, currentPanel.webview);
            currentPanel.onDidDispose(
                () => {
                    currentPanel = undefined;
                },
                null,
                context.subscriptions
            );
        }
    });

    context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {
    if (currentPanel) {
        currentPanel.dispose();
    }

    currentPanel = undefined;
}


function readIndex(extPath: string, webview: vscode.Webview) {
    try {
        const mediaPath = webview.asWebviewUri(vscode.Uri.file(path.join(extPath, "media", "index.html")));
        console.log("ext path = ", mediaPath.toString());
        const htmlText = `<!DOCTYPE html><html><head> 
      <title>Tool Box</title><meta charset=utf-8><meta name=description content="tool box - extension of vscode"><meta name=format-detection content="telephone=no"><meta name=msapplication-tap-highlight content=no><meta name=viewport content="user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1,width=device-width"></head><body>
      <iframe
        scrolling="no"
        name="game-frame"
        src="${mediaPath}"
        frameborder="no"
        title="Tool Box"
        style="width:100%;height:900px;"
      >
      </iframe>
      
      </body></html>`;
        
        return htmlText.replace(/\n/g, "")
    } catch(ex: any) {
        return ex.toString();
    }
}


