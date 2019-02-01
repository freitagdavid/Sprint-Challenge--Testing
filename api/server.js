const express = require('express');
const games = require('./gamesModel');
const server = express();

server.use(express.json());

server.get('/api/games', (req, res) => {
    games.getAll().then(data => {
        res.status(200).json(data);
    });
});

server.post('/api/games', (req, res) => {
    const game = req.body;
    games
        .insert(game)
        .then(data => {
            res.status(201).json(data);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

module.exports = server;
