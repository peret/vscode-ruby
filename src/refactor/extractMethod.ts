import * as vscode from 'vscode';
import { CodeAction, CodeActionKind, WorkspaceEdit } from "vscode";

export class ExtractRubyMethod extends CodeAction {
	constructor(document: vscode.TextDocument, selection: vscode.Range | vscode.Selection) {
		super('Extract as method', CodeActionKind.RefactorExtract);

		const code = document.getText(selection);
		this.edit = new WorkspaceEdit();
		this.edit.replace(document.uri, selection, "new_method()");
		this.edit.insert(document.uri, selection.end, "\ndef new_method\n" + code + "\nend");
	}
}