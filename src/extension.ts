import * as vscode from "vscode"
import spelling from 'spelling';
import dictionary from './dictionaries/en_US.js';

//import * as fs from "fs"

const decorationType = vscode.window.createTextEditorDecorationType({
    backgroundColor: 'blue'
})

export function activate(context: vscode.ExtensionContext){

    vscode.window.showInformationMessage("Language Support for Babel was activated.")

    let disposable = vscode.commands.registerCommand(
        "language-babel.newBabelFile", function() {
            vscode.workspace.openTextDocument({ language: 'babel' }).then((document) => {
                vscode.window.showTextDocument(document)
            })
        }
    );

    context.subscriptions.push(disposable);
    

    context.subscriptions.push(vscode.commands.registerCommand(
        "language-babel.spellCheck", function() {
            let sourceCode = editor.document.getText()
            sourceCode = sourceCode.replace(/[\W_]/g, ' ')
            sourceCode = sourceCode.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase()

            let sourceCodeArray : str[] = sourceCode.split('\n')
            let decorationsArray: vscode.DecorationOptions[] = []

            let dict = new spelling(dictionary)
            //let res = dict.lookup(sourceCodeArray)

            for (let line : int = 0; line < sourceCodeArray.length; line++) {
                let range = new vscode.Range(
                    new vscode.Position(line, 0),
                    new vscode.Position(line, sourceCodeArr[line].length)
                );
                
                let unknownWords: string[] = []
                let res = dict.lookup( sourceCodeArray[line].split(' ') )

                for (let i = 0; i < res.length; i++) {
                    if (res[i].found === false) unknownWords.push(res[i].word);
                }

                let decoration = {
                    range,
                    renderOptions: {
                      after: {
                        contentText: 'Unknown words:' + unknownWords.join(', '),
                        fontWeight: 'bold',
                        color: 'white',
                      },
                    },
                };

                decorationsArray.push(decoration)
            }
            
            vscode.TextEditor.setDecorations(decorationType, decorationsArray)
        }
    ));

    /* vscode.workspace.onDidChangeConfiguration(event => {
        let affected = event.affectsConfiguration("")
        if (affected) {
            let jsonFile1 = JSON.parse(fs.readFileSync("./package.json", "utf-8"))
            let jsonFile2 = JSON.parse(fs.readFileSync("./settings.json", "utf-8"))            
        }        
    }) */

}