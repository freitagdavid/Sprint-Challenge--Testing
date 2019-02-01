const express = require('express');
const games = require('./gamesModel');
const server = express();

server.use(express.json());

server.get('/api/games', (req, res) => {
    const data = games.get();
    res.status(200).json(data);
});

server.post('/api/games', (req, res) => {
    const game = req.body;
    response = games.post(game);
    console.log(response);
    res.status(201).json(response);
});

module.exports = server;
