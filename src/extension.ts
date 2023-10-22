import * as vscode from "vscode";
//import * as fs from "fs";

export function activate(context: vscode.ExtensionContext){

    vscode.window.showInformationMessage("Language Support for Babel was activated.");

    let disposable = vscode.commands.registerCommand(
        "language-babel.newBabelFile", function() {
            vscode.workspace.openTextDocument({ language: 'babel' }).then((document) => {
                vscode.window.showTextDocument(document);
            });
        }
    );

    context.subscriptions.push(disposable);

    /* vscode.workspace.onDidChangeConfiguration(event => {
        let affected = event.affectsConfiguration("")
        if (affected) {
            let jsonFile1 = JSON.parse(fs.readFileSync("./package.json", "utf-8"));
            let jsonFile2 = JSON.parse(fs.readFileSync("./settings.json", "utf-8"));            
        }        
    }) */

}