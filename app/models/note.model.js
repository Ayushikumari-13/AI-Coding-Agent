const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema(
{
    title: {
        type: String,
        required: true,
        trim: true
    },

    content: {
        type: String,
        required: true,
        trim: true
    },

    category: {
        type: String,
        default: "General",
        trim: true
    },

    tags: [
        {
            type: String,
            trim: true
        }
    ]
},
{
    timestamps: true
}
);

module.exports = mongoose.model("Note", NoteSchema);