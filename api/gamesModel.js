const db = [];

exports.get = () => {
    return db;
};

exports.post = () => {
    return data => {
        db.push(data);
    };
};
