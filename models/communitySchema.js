import mongoose from 'mongoose';

const communitySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    location: {
        address: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        zipCode: { type: String, required: true }
    },
    careTypes: {
        type: [String], // e.g., ['Independent Living', 'Assisted Living', 'Memory Care']
        required: true
    },
    amenities: {
        type: [String], // e.g., ['Swimming Pool', 'Fitness Center', 'Pet-Friendly']
        default: []
    },
    priceRange: {
        min: { type: Number, required: true },  // e.g., 1500
        max: { type: Number, required: true }   // e.g., 5000
    },
    communitySize: {
        type: String, // e.g., 'Small', 'Medium', 'Large'
        enum: ['Small', 'Medium', 'Large']
    },
    moveInDate: {
        type: Date
    },
    description: {
        type: String,
        required: true
    },
    contactInfo: {
        phone: { type: String, required: true },
        email: { type: String, required: true }
    },
    images: {
        type: [String], // Array of image URLs
        default: []
    },
    isActive: {
        type: Boolean,
        default: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });

const Community = mongoose.model('Community', communitySchema);


export default Community;

