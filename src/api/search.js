const natural = require('natural');
const allMemes = require('../../memes.json');

const tokenizer = new natural.WordTokenizer();

function getBestScore(currToken, allTokens) {
  let score = 0;
  allTokens.forEach((token) => {
    const dist = natural.JaroWinklerDistance(token, currToken);
    if (score < dist) {
      score = dist;
    }
  });
  return score;
}

function search(query) {
  const tokens = tokenizer.tokenize(query.toLowerCase());
  const allScores = allMemes.reduce((scores, meme) => {
    let score = 0;
    tokens.forEach((token) => {
      score += getBestScore(token, meme.tokens);
    });
    scores.push({
      score,
      link: meme.link,
      text: meme.text,
    });
    return scores;
  }, []);
  console.log(allScores.sort((a, b) => b.score - a.score));
  return allScores
    // .filter((a) => a.score >= 0.7)
    .sort((a, b) => b.score - a.score)
    .slice(0, 8);
}

module.exports = search;
