const db = require('../data/dbConfig.js');

exports.getAll = () => {
    return db('games');
};

exports.insert = data => {
    return db('games')
        .insert(data)
        .then(([id]) => {
            return db('games')
                .where({ id })
                .first();
        });
};
