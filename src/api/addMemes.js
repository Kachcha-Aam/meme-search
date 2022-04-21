const fs = require('fs');

const natural = require('natural');
const allMemes = require('../../memes.json');

const tokenizer = new natural.WordTokenizer();

function addMemes(memes) {
  try {
    memes.forEach((meme) => {
      allMemes.push({
        link: meme.link,
        text: meme.text.toLowerCase(),
        tokens: tokenizer.tokenize(meme.text.toLowerCase()),
      });
    });
    fs.writeFileSync('memes.json', JSON.stringify(allMemes, null, 2));
  } catch (err) {
    console.log('Error in adding meme:', err);
  }
}

module.exports = addMemes;
