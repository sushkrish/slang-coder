const vscode = require('vscode');
const { translateSelection } = require('./src/translate');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  context.subscriptions.push(
    vscode.commands.registerCommand('slang-coder.translate', () =>
      translateSelection(context)
    )
  );
}

function deactivate() {}

module.exports = { activate, deactivate };
