const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const receiverSchema = new Schema({
    receiverOrgName: {
        type: String,
        required: [true, 'Organization Name is required'],
        minlength: [3, 'Organization Name must be at least 3 characters long'],
    },
    receiverContactPerson: {
        type: String,
        required: [true, 'Contact Person Name is required'],
        minlength: [3, 'Contact Person Name must be at least 3 characters long'],
    },
    receiverEmail: {
        type: String,
        required: [true, 'Email is required'],
        match: [/^\S+@\S+\.\S+$/, 'Invalid email address'],
    },
    receiverPhone: {
        type: Number,
        required: [true, 'Phone Number is required'],
    },
    
    receiverAddress: {
        type: String,
        required: [true, 'Address is required'],
        minlength: [5, 'Address must be at least 5 characters long'],
    },
    receiverCity: {
        type: String,
        required: [true, 'City is required'],
        minlength: [2, 'City must be at least 2 characters long'],
    },
    receiverState: {
        type: String,
        required: [true, 'State is required'],
        minlength: [2, 'State must be at least 2 characters long'],
    },
    foodNeeded: {
        type: [String],
        required: true,
        enum: ['cooked', 'vegetables', 'fruits', 'grains'],
    },
    receiverPassword: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [6, 'Password must be at least 6 characters long'],
    },
});

const Receiver = mongoose.model("Receiver", receiverSchema);
module.exports = Receiver;