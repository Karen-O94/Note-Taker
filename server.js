const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

//storing path of public folder holding html files into a variable
const mainDir = path.join(__dirname, "/public");
console.log(mainDir);

app.use(express.static('public'));
app.use(express.urlencoded({extended: true }));
app.use(express.json());

//Linking the folders to get pages with each other
app.get('/', (req, res) => res.sendFile(path.join(mainDir, 'index.html')));
app.get('/notes', (req, res) => res.sendFile(path.join(mainDir, 'notes.html')));


app.get("/api/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "/db/db.json"));
});

//Retrieves information from json file
app.get('/api/notes/:id', (req, res) => {
    let savedNotes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
    res.json(savedNotes[Number(req.params.id)]);
});

//This function 
app.post('/api/notes', (req, res) => {
    let savedNotes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
    let newNote = req.body;

    //Generates unique ID for each object 
    let uniqueID = (savedNotes.length).toString();
    newNote.id = uniqueID;
    savedNotes.push(newNote);
    //newNote.title = newNote.title.replace(/\s+/g, '').toLowerCase();
    fs.writeFileSync('./db/db.json',JSON.stringify(savedNotes));
    console.log('Your note has been saved! Content: ', newNote);
    res.json(savedNotes);
});

app.delete('/api/notes/:id', function(req, res) {
    let savedNotes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
    let noteID = req.params.id;
    let newID = 0;

    savedNotes = savedNotes.filter(specifiedNote => {
        return specifiedNote.id != noteID;
    })
    for (specifiedNote of savedNotes) {
        specifiedNote.id = newID.toString();
        newID++;
    }
    fs.writeFileSync('./db/db.json',JSON.stringify(savedNotes));
    res.json(savedNotes);
});

app.listen(PORT, () => console.log(`Hey!!You are currently listening on: http://localhost:${PORT}`))