const express = require("express");
const repoContext = require("./repository/repository-wrapper");
const {validateSong} = require("./middleware/song-validation");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(5000, function(){
    console.log("Server started. Listening on port 5000");
});

app.get("/api/songs", (req, res) => {
    const music = repoContext.songs.findAllSongs();
    return res.send(music);
});

app.get("/api/songs/:id", (req, res) => {
    const id = req.params.id;
    const music = repoContext.songs.findSongById(id);
    return res.send(music);
});

app.post("/api/songs", (req, res) => {
    const newSong = req.body;
    const addSong = repoContext.songs.createSong(newSong);
    return res.send(addSong);
})