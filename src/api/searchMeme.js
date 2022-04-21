const express = require('express');
const bodyParser = require('body-parser');

const getScore = require('./getScore');
const addMemes = require('./addMemes');

const app = express();

// Tell express to use the body-parser middleware and to not parse extended bodies
app.use(express.json());
// app.use(express.urlencoded());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/search', (req, res) => {
  const { body } = req;
  const searchTerm = body.search;
  const scores = getScore(searchTerm);
  scores.sort((a, b) => b.score - a.score);
  res.set('Content-Type', 'application/json');
  res.send(scores);
});

app.post('/add-memes', async (req, res) => {
  const { body } = req;
  await addMemes(body.memes);
  res.set('Content-Type', 'application/json');
  res.send('memes added successfully');
});

// Tell our app to listen on port 3000
app.listen(3000, (err) => {
  if (err) {
    throw err;
  }

  console.log('Server started on port 3000');
});
