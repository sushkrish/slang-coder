# slang-coder

A VS Code extension that translates selected English text to Hindi in Romanised script using the [Sarvam AI](https://www.sarvam.ai/) translation API.

## Setup

1. Clone the repository and install dependencies:

   ```bash
   npm install
   ```

2. Open the project in VS Code and press `F5` to launch the Extension Development Host.

## Authentication

On the first translation, the extension will prompt you to enter your **Sarvam AI API subscription key**. The key is stored securely using VS Code's built-in secret storage and will not be asked for again on subsequent uses.

To obtain an API key, sign up at [sarvam.ai](https://www.sarvam.ai/).

## Usage

1. Open any file in VS Code.
2. Select the text you want to translate.
3. Run the command one of two ways:
   - Open the Command Palette (`Cmd+Shift+P` / `Ctrl+Shift+P`) and run **Slangcoder: Translate**
   - Press the keybinding **`Alt+T`** (only active when text is selected)
4. The selected text is replaced in-place with the Hindi translation in Romanised script.

## Translation details

- Source language: English (en-IN)
- Target language: Hindi (hi-IN)
- Output script: Roman (Romanised/transliterated Hindi)
- Numeral format: International (0–9)
- Powered by: [Sarvam AI Translate API](https://docs.sarvam.ai/api-reference-docs/getting-started/sd-ks-libraries)

## Constraints

- A text selection is required before running the command.
- The keybinding `Alt+T` is only active when text is selected outside of a diff editor.
- Translation is applied to the entire selection as a single block.
