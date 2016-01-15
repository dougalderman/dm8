var users = require('../models/user');

module.exports = {
    index: function(req, res, next) {
        res.json(users);
    },
    show: function(req, res, next) {
        var user = users[req.params.id];
        res.json(user);
    },
    create: function(req, res, next) {
        users.push(req.body);
        res.json(users[users.length - 1]);
    },
    update: function(req, res, next) {
        var id = req.params.id
        users[id] = req.body
        res.json(users[id]);
    },
    destroy: function(req, res, next) {
        users.splice(req.params.id, 1);
        res.status(204).send();
    },
};

