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
        it('Respond with array of games', async () => {
            let response = await request(server).get('/api/games');
            expect(Array.isArray(response.body)).toBeTruthy();
        });
    });
    describe('POST /api/games', () => {
        const testData = {
            title: 'Zork',
            genre: 'Text based adventure',
            releaseYear: 1977,
        };
        it('Respond with status code 201', async () => {
            let response = await request(server)
                .post('/api/games')
                .send(testData);
            expect(response.status).toBe(201);
        });
        it('Respond with json', async () => {
            let response = await request(server)
                .post('/api/games')
                .send(testData);
            expect(response.type).toMatch(/json/i);
        });
        it('Respond with inserted data', async () => {
            let response = await request(server)
                .post('/api/games')
                .send(testData);
            const { body } = response;
            expect(body.title === testData.title).toBeTruthy();
        });
    });
});
