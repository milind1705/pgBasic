module.exports = app => {
    const tutorial = require('../controller/tutorial.controller');
    var router = require('express').Router();

    // to create tutorial
    router.post('/create', tutorial.create, (req, res) => {
        res.send(req.body)
    });

}