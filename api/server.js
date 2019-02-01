const express = require('express');
const games = require('./gamesModel');
const server = express();

server.use(express.json());
