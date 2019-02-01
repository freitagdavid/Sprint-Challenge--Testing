const request = require('supertest');

const server = require('./server.js');

describe('server.js', () => {
    describe('GET /api/games', () => {
        it('Respond with status code 200', async () => {
            let response = await request(server).get('/api/games');
            expect(response.status).toBe(200);
        });
        it('Respond with a json object', async () => {
            let response = await request(server).get('/api/games');
            expect(response.type).toMatch(/json/i);
        });
    });
    describe('POST /api/games', () => {
        it('Respond with status code 201', async () => {
            let response = await request(server).post('/api/games', {
                title: 'Zork',
                genre: 'Text base adventure',
                releaseYear: 1977,
            });
            expect(response.status).toBe(201);
        });
        it('Respond with updated data', async () => {
            let response = await request(server).post('/api/games', {
                title: 'Zork',
                genre: 'Text base adventure',
                releaseYear: 1977,
            });
            expect(response.type).toMatch(/json/i);
        });
    });
});
