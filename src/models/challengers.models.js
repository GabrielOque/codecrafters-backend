import mongoose from 'mongoose';

const challengerSchema = new mongoose.Schema({
    lavel: {
        type: Number,
        required: true,
        trim: true,
    },
    points: {
        type: Number,
        required: true,
        trim: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    answer: {
        type: String,
        required: true,
    },
    initialConfig: {
        type: String,
        required: true,
    },
    values: {
        type: String,
    },
})

export default mongoose.model('Challenger', challengerSchema);