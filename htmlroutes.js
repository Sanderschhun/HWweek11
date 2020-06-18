var express = require("express");
var router = express.Router();
var path = require("path");

router.post('/index.html', function(req, res) {
    res.sendFile(path.join(__dirname,"../public/notes.html"))
});

router.get('/notes', function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"))
});

router.delete('/api/notes/:id', function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"))
});
module.exports = router

