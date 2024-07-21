const express = require('express');

const bodyParser = require('body-parser');
const app = express();
const port = 8080;
const www = process.env.WWW || './';
app.use(express.static(www));
console.log(`serving ${www}`);

app.use(bodyParser.json());
app.get('*', (req, res) => {
    res.sendFile(`index.html`, { root: www });
});
app.listen(port, () => console.log(`listening on http://localhost:${port}`));

app.post('/', (req, res) => {
    console.log(req.body);
    res.send('Received the data.');
})