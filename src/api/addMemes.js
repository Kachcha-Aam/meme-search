const fs = require('fs');
const natural = require('natural');

const tokenizer = new natural.WordTokenizer();
const path = '/home/anurag/Desktop/sideProj/meme-search/memes.json';
async function addMemes(memes) {
  try {
    const currImages = JSON.parse(fs.readFileSync(path));
    memes.forEach((meme) => {
      currImages.push({
        link: meme.link,
        text: meme.text,
        tokens: tokenizer.tokenize(meme.text),
      });
    });
    fs.writeFileSync('memes.json', JSON.stringify(currImages));
  } catch (err) {
    console.log('Error in adding meme:', err);
  }
}

module.exports = addMemes;
