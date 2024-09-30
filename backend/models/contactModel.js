const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    fullname:{

    } 
});

module.exports = mongoose.model("Contact",contactSchema);