import * as vscode from 'vscode';
import { ExtensionContext } from "vscode";
import { ExtractRubyMethod } from '../refactor/extractMethod';

export function registerRefactoringProvider(ctx: ExtensionContext) {
	const refactoringProvider = {
		provideCodeActions(document: vscode.TextDocument, range: vscode.Range | vscode.Selection, context, token) {
			// TODO: Apparently this is called pretty often. Is there a way to not create a new object each time?
			if (!range.isEmpty) {
				return [
					new ExtractRubyMethod(document, range)
				]
			}
			return []
		}
	}
	ctx.subscriptions.push(vscode.languages.registerCodeActionsProvider(['ruby'], refactoringProvider))
}