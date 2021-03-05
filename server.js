const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000; 

//storing path of public folder holding html files into a variable
const mainDir = path.join(__dirname, "/public")

//Defining db.json

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Linking the HTML pages with each other
app.get('/', (req, res) => res.sendFile(path.join(mainDir, 'index.html')));
app.get('/notes', (req, res) => res.sendFile(path.join(mainDir, 'notes.html')));

//
app.get("/api/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "/db/db.json"));
});

//Displays notes json
//app.get('/api/notes/:id', (req, res) => res.json(newNote));


// app.post('/api/characters', (req, res) => {
//     // req.body hosts is equal to the JSON post sent from the user
//     // This works because of our body parsing middleware
//     const newNote = req.body;
  
//     // Using a RegEx Pattern to remove spaces from newCharacter
//     // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
//     newCharacter.title = newCharacter.name.replace(/\s+/g, '').toLowerCase();
//     console.log(newCharacter);
  
//     characters.push(newCharacter);
//     res.json(newCharacter);
//   });
  

app.listen(PORT, () => console.log(`Listening on: http://localhost:${PORT}`))