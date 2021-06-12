const db = require('../models');
const Tutorial = db.tutorials;
const Op = db.Sequelize.Op;

//to create a new tutorial
exports.create = (req, res) => {
// validate request
if(!req.body.title){
    res.status(400).send("title can not be empty");
    return;
}
// create a tutorial
const tutorial = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
}

// save tutorial in database
Tutorial.create(tutorial)
.then( data => {
    res.send(data);
})
.catch (err => {
    res.status(500).send({
        message: err.message || "some error occured during the creating tutorials"
    })
})

};

//to find all tutorials from the database
exports.findall = (req, res) => {

};

//to find a single tutorial  by an id from database
exports.findOne = (req, res) => {

};

//to pdate a tutorial with an id
exports.update = (req, res) => {

};

//to delete a tutorial from the databse with an id
exports.delete = (req, res) => {

};
//to cdelete all the tutorials
exports.deleteAll = (req, res) => {

};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  
};
