"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const vscode = require("vscode");
//import * as fs from "fs";
function activate(context) {
    vscode.window.showInformationMessage("Language Support for Babel was activated.");
    let disposable = vscode.commands.registerCommand("language-babel.newBabelFile", function () {
        /*  vscode.commands.executeCommand(
             "workbench.action.files.newUntitledFile",
             {language: "python"}
         ); */
        vscode.workspace.openTextDocument({ language: 'babel' }).then((document) => {
            vscode.window.showTextDocument(document);
        });
    });
    context.subscriptions.push(disposable);
    /* vscode.workspace.onDidChangeConfiguration(event => {
        let affected = event.affectsConfiguration("")
        if (affected) {
            let jsonFile1 = JSON.parse(fs.readFileSync("./package.json", "utf-8"));
            let jsonFile2 = JSON.parse(fs.readFileSync("./settings.json", "utf-8"));
        }
    }) */
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map