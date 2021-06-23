const express = require("express");
const repoContext = require("./repository/repository-wrapper");
const app = express();

app.listen(5000, function(){
    console.log("Server started. Listening on port 5000");
});

app.get("/api/songs/:id", (req, res) => {
    const id = req.params.id;
    const music = repoContext.songs.findSongById(id);
    return res.send(music);
})