const Editor = require("../models/editeur.model.js");

// Create and Save a new Editor
exports.create = (req, res) => {
    // Validate request
    // console.log(req);
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    // Create a Editor
    const Editor2 = new Editor({
        id: req.body.id,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email
    });

    // Save Editor in the database
    Editor.create(Editor2, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Editor."
            });
        else res.send(data);
    });
};

// Retrieve all Editor from the database.
exports.findAll = (req, res) => {
    Editor.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Editor."
            });
        else res.send(data);
    });
};

// Find a single Editor with a EditorId
exports.findOne = (req, res) => {
    Editor.findById(req.params.editorId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Editor with id ${req.params.editorId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Editor with id " + req.params.editorId
                });
            }
        } else res.send(data);
    });
};

// Update a Editor identified by the editorId in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    Editor.updateById(
        req.params.editorId,
        new Editor(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found Editor with id ${req.params.editorId}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error updating Editor with id " + req.params.editorId
                    });
                }
            } else res.send(data);
        }
    );
};

// Delete a Editor with the specified editorId in the request
exports.delete = (req, res) => {
    Editor.remove(req.params.editorId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Editor with id ${req.params.editorId}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete Editor with id " + req.params.editorId
                });
            }
        } else res.send({ message: `Editor was deleted successfully!` });
    });
};