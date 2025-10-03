import mongoose from "mongoose";

const PortfolioSchema = new mongoose.Schema({
    title: {
        type: String, required: true
    },
    category: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true

    }, // store image URL
    createdAt: {
        type: Date,
        default: Date.now
    },
});

const PortfolioModel =  mongoose.model("Portfolio", PortfolioSchema);

export default PortfolioModel;