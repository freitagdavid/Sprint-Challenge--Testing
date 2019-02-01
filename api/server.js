const express = require('express');
const games = require('./gamesModel');
const server = express();

server.use(express.json());

server.get('/api/games', (req, res) => {
    const data = games.get();
    res.status(200).json(data);
});

module.exports = server;
