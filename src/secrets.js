const vscode = require('vscode');

const SARVAM_API_KEY_SECRET = 'slang-coder.sarvamApiKey';

/**
 * Returns the stored Sarvam API key, or prompts the user to enter one and
 * persists it securely in VS Code's secret storage.
 *
 * Returns `undefined` if the user cancels the input prompt.
 *
 * @param {vscode.ExtensionContext} context
 * @returns {Promise<string | undefined>}
 */
async function getOrPromptApiKey(context) {
  const stored = await context.secrets.get(SARVAM_API_KEY_SECRET);
  if (stored) {
    return stored;
  }

  const entered = await vscode.window.showInputBox({
    title: 'Sarvam AI API Key',
    prompt: 'Enter your Sarvam AI API subscription key to enable translation.',
    password: true,
    ignoreFocusOut: true,
    placeHolder: 'Paste your API key here',
  });

  if (!entered) {
    return undefined;
  }

  await context.secrets.store(SARVAM_API_KEY_SECRET, entered);
  return entered;
}

module.exports = { getOrPromptApiKey };
