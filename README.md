# HTML Inline styles to CSS Converter

This project is a Node.js script that allows you to convert HTML input with inline styles into a CSS stylesheet and modify the HTML to use class names instead of inline styles.
## Requirements
* Node.js (version 12 or higher)

## Installation

1. Clone this repository or download the script file.

2. Open a terminal or command prompt and navigate to the project directory.

3. Install the required dependencies by running the following command:
```
npm install cheerio
```

Usage

Prepare the HTML input that contains the inline styles you want to convert.

Save the HTML input to a file, e.g., input.html, in the project directory.

Open the terminal or command prompt in the project directory.

Run the script using the following command:
```
node main.js
``` 
The script will generate two files in the `output` directory:
* styles.css - This file contains the extracted styles from the HTML input.
* modified.html - This file contains the modified HTML with class names replacing inline styles.

## Example

To demonstrate the usage, let's assume we have the following HTML input (input.html):

```html
<div style="color: red;">This is a red text.</div>
<p style="font-size: 16px;">This is a paragraph with font-size 16px.</p>
```

By running the script, the following files will be generated:

styles.css:

```css
.class-0 { color: red; }
.class-1 { font-size: 16px; }
```

modified.html:

```html
<div class="class-0">This is a red text.</div>
<p class="class-1">This is a paragraph with font-size 16px.</p>
``` 
You can then use the generated styles.css file in your project by linking it to your HTML file.


## License

This project is licensed under the MIT License.

Feel free to modify and adapt this script according to your needs.