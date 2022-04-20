const natural = require('natural');
const fs = require('fs');

const tokenizer = new natural.WordTokenizer();
const path = '/home/anurag/Desktop/sideProj/meme-search/memes.json';

function getBestScore(currToken, allTokens) {
  let score = 0;
  allTokens.forEach((token) => {
    if (score < natural.JaroWinklerDistance(token, currToken)) {
      score = natural.JaroWinklerDistance(token, currToken);
    }
  });
  return score;
}

function getScore(currText) {
  const currImages = JSON.parse(fs.readFileSync(path));
  const tokens = tokenizer.tokenize(currText.toLowerCase());
  const allScores = currImages.reduce((scores, img) => {
    let score = 0;
    tokens.forEach((token) => {
      score += getBestScore(token, img.tokens);
    });
    scores.push({
      score,
      link: img.link,
      text: img.text,
    });
    return scores;
  }, []);
  return allScores;
}

module.exports = getScore;
