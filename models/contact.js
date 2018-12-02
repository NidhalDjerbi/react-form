const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const contactSchema = Schema({
    name: {
        type: String,
        match: [/^[a-zA-Z][a-zA-Z\s]*$/, 'Name not valid'],
        required: 'Name required'
    },
    email: {
        type: String,
        match: [/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Email not valid'],
        required: 'Email required'
    },
    message: {
        type: String,
        required: 'Message required'
    }
});


module.exports = mongoose.model('Contact', contactSchema);
