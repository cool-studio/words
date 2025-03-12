# Language-Themed Word Generator

## Overview

This project is designed to facilitate the generation of random strings and passphrases using themed vocabulary. The words are organized by language, following the ISO 639 standard, and are stored in a structured folder format.

## Project Structure

The project will contain a series of folders, each named according to a specific language code from the ISO 639 standard (e.g., `en` for English, `es` for Spanish). Inside each language folder, you will find text files that represent different themes. Each text file will contain a list of words related to that theme, with each word separated by a newline.

### Example Structure
```
/project-root
    /en
        /animals.txt
        /colors.txt
    /es
        /animales.txt
        /colores.txt
    /fr
        /animaux.txt
        /couleurs.txt
```

## Usage

The words contained in these text files can be utilized for various applications, including:

- Random string generation
- Passphrase generation
- Language learning tools
- Creative writing prompts

## Contribution

Contributions to expand the vocabulary and themes are welcome! Please follow the structure outlined above when adding new words or themes.

After adding a new word or theme, sanitise.js can be used to sanitise the file and remove any duplicate words, empty lines, and words that contain parentheses, etc.

```
node sanitise.js <file-path>
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details.