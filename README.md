# slang-coder

Translate selected English text to Hindi in Romanized script directly inside Cursor (or VS Code), powered by [Sarvam AI](https://www.sarvam.ai/).

## Install in Cursor (from VSX/Open VSX)

1. Open **Cursor**.
2. Go to **Extensions** (`Cmd+Shift+X` on macOS / `Ctrl+Shift+X` on Windows/Linux).
3. Search for **slang-coder**.
4. Click **Install**.

If you have a `.vsix` package instead, open the Extensions view menu (`...`) and choose **Install from VSIX...**.

## First-time setup

On your first translation, the extension asks for your **Sarvam AI API subscription key**.

- The key is stored securely in the editor's secret storage.
- You normally enter it once and reuse it for future translations.

Get an API key at [sarvam.ai](https://www.sarvam.ai/).

## How to use

1. Open any editable file in Cursor.
2. Select the English text you want to translate.
3. Run **Slangcoder: Translate** using either:
   - Command Palette (`Cmd+Shift+P` / `Ctrl+Shift+P`)
   - Keybinding: `Alt+T` (only when text is selected)
4. The selected text is replaced inline with Romanized Hindi output.

## Translation behavior

- Source language: English (`en-IN`)
- Target language: Hindi (`hi-IN`)
- Script output: Roman (Romanized Hindi, not Devanagari)
- Numerals: International (`0-9`)
- Provider: [Sarvam AI Translate API](https://docs.sarvam.ai/api-reference-docs/getting-started/sd-ks-libraries)

## Notes and limitations

- You must select text before running the command.
- `Alt+T` is only active when text is selected and the editor is not in diff mode.
- The extension translates the full selection as one block.

## For developers

If you want to run this extension from source:

1. Clone the repo and run `npm install`.
2. Open the project in VS Code/Cursor.
3. Press `F5` to launch the Extension Development Host.
