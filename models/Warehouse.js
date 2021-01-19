const mongoose = require('mongoose');

const WarehouseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name'],
        unique: true,
        trim: true,
        maxLength: [50, 'Name cannot be more than 50 chars']
    },
    slug: String,
    description: {
        type: String,
        required: true,
        maxLength: [500, 'Description cannot be more than 500 chars']
    },
    phone: {
        type: String,
        maxlength: [20, 'Phone number cannot be more than 20 chars']
    },
    address: {
        type: String,
        required: [true, 'please enter address']
    },
    location: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true,
            index: '2dsphere'
        },
        formattedAddress: String,
        street: String,
        city: String,
        state: String,
        zipcode: String,
        country: String
    }
});