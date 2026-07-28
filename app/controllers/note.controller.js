const Note = require("../models/note.model.js");

// Create and Save a new Note
exports.create = async (req, res) => {
    try {
        if (!req.body.content) {
            return res.status(400).send({
                message: "Note content can not be empty"
            });
        }

        const note = new Note({
            title: req.body.title || "Untitled Note",
            content: req.body.content,
            category: req.body.category || "General",
            tags: req.body.tags || []
        });

        const data = await note.save();
        res.send(data);

    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Note."
        });
    }
};

// Retrieve all notes
exports.findAll = async (req, res) => {
    try {
        const notes = await Note.find();
        res.send(notes);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    }
};

// Find one note
exports.findOne = async (req, res) => {
    try {
        const note = await Note.findById(req.params.noteId);

        if (!note) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });
        }

        res.send(note);

    } catch (err) {
        res.status(500).send({
            message: "Error retrieving note with id " + req.params.noteId
        });
    }
};

// Update Note
exports.update = async (req, res) => {
    try {

        if (!req.body.content) {
            return res.status(400).send({
                message: "Note content can not be empty"
            });
        }

        const note = await Note.findByIdAndUpdate(
            req.params.noteId,
            {
                title: req.body.title || "Untitled Note",
                content: req.body.content,
                category: req.body.category || "General",
                tags: req.body.tags || []
            },
            {
                new: true
            }
        );

        if (!note) {
            return res.status(404).send({
                message: "Note not found"
            });
        }

        res.send(note);

    } catch (err) {
        res.status(500).send({
            message: "Error updating note."
        });
    }
};

// Delete Note
exports.delete = async (req, res) => {

    try {

        const note = await Note.findByIdAndDelete(req.params.noteId);

        if (!note) {
            return res.status(404).send({
                message: "Note not found"
            });
        }

        res.send({
            message: "Note deleted successfully!"
        });

    } catch (err) {
        res.status(500).send({
            message: "Could not delete note."
        });
    }
};

// Search Notes
exports.search = async (req, res) => {

    try {

        const keyword = req.query.keyword || "";

        const notes = await Note.find({
            $or: [
                {
                    title: {
                        $regex: keyword,
                        $options: "i"
                    }
                },
                {
                    content: {
                        $regex: keyword,
                        $options: "i"
                    }
                },
                {
                    category: {
                        $regex: keyword,
                        $options: "i"
                    }
                },
                {
                    tags: {
                        $regex: keyword,
                        $options: "i"
                    }
                }
            ]
        });

        res.send(notes);

    } catch (err) {

        res.status(500).send({
            message: "Search failed."
        });

    }

};

// Filter By Category
exports.findByCategory = async (req, res) => {

    try {

        const notes = await Note.find({
            category: req.params.category
        });

        res.send(notes);

    } catch (err) {

        res.status(500).send({
            message: "Category search failed."
        });

    }

};

// Filter By Tag
exports.findByTag = async (req, res) => {

    try {

        const notes = await Note.find({
            tags: req.params.tag
        });

        res.send(notes);

    } catch (err) {

        res.status(500).send({
            message: "Tag search failed."
        });

    }

};