const vscode = require('vscode');
const { SarvamAIClient } = require('sarvamai');
const { getOrPromptApiKey } = require('./secrets');

/**
 * Translates the current editor selection from English (en-IN) to Hindi in
 * Romanised script (hi-IN, roman output) and replaces the selection in-place.
 *
 * @param {vscode.ExtensionContext} context
 */
async function translateSelection(context) {
  const editor = vscode.window.activeTextEditor;
  if (!editor) {
    vscode.window.showWarningMessage('Slangcoder: No active editor found.');
    return;
  }

  const selection = editor.selection;
  if (selection.isEmpty) {
    vscode.window.showWarningMessage('Slangcoder: Select some text first.');
    return;
  }

  const apiKey = await getOrPromptApiKey(context);
  if (!apiKey) {
    vscode.window.showWarningMessage('Slangcoder: API key is required to translate.');
    return;
  }

  const inputText = editor.document.getText(selection);

  const client = new SarvamAIClient({ apiSubscriptionKey: apiKey });

  let translated;
  try {
    const response = await client.text.translate({
      input: inputText,
      source_language_code: 'en-IN',
      target_language_code: 'hi-IN',
      output_script: 'roman',
      numerals_format: 'international',
      model: 'mayura:v1',
      mode: 'modern-colloquial'
    });
    translated = response.translated_text;
  } catch (err) {
    vscode.window.showErrorMessage(`Slangcoder: Translation failed — ${err.message}`);
    return;
  }

  await editor.edit((editBuilder) => {
    editBuilder.replace(selection, translated);
  });
}

module.exports = { translateSelection };
