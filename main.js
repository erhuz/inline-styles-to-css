const fs = require('fs');
const cheerio = require('cheerio');

function extractInlineStyles($, stylesheet) {
  $(`[style]`).each((index, element) => {
    const inlineStyles = $(element).attr('style');
    const className = `class-${index}`; // Generate a unique class name
    $(element).removeAttr('style').addClass(className);
    stylesheet.push(`.${className} { ${inlineStyles} }`);
  });
}

function replaceInlineStylesWithClasses($, stylesheet) {
  $(`[style]`).each((index, element) => {
    const className = $(element).attr('class');
    $(element).removeAttr('class');
    $(element).attr('class', className);
  });
}

function processHTML(html) {
  const $ = cheerio.load(html);
  const stylesheet = [];

  extractInlineStyles($, stylesheet);
  replaceInlineStylesWithClasses($, stylesheet);

  return { html: $.html(), stylesheet: stylesheet.join('\n') };
}

// Example usage
const html = fs.readFileSync('index.html', 'utf8');

const { html: modifiedHTML, stylesheet } = processHTML(html);
// Create the output directory if it doesn't exist
if (!fs.existsSync('output')) {
    fs.mkdirSync('output');
}
fs.writeFileSync('output/styles.css', stylesheet);
fs.writeFileSync('output/modified.html', modifiedHTML);
console.log('CSS stylesheet and modified HTML created successfully!');
