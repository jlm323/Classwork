const express = require('express');
const app = express();
const port = 3000;

let ball = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"];

// greetings

app.get('/greeting/:name', (req, res) => {
    res.send(`<h1>Wow! Hello there ${req.params.name}</h1>`);
  });

// tips

app.get('/tip/:total/:tipPercentage', (req, res) => {
    let result = req.params.tipPercentage / 100 * req.params.total;
    res.send(`<h1>tip: ${result}</h1>`);
})

// magic 8 ball

app.get('/magic/:question', (req, res) => {
    let answer = ball[Math.floor(Math.random() * ball.length)];
    res.send(`${req.params.question}  <h1>${answer}</h1>`);
})

app.listen(port,() => {
    console.log('listening on port' , port);
});