
import mongoose from 'mongoose';

const { Schema } = mongoose;


const categorySchema = new Schema({
    creator: {type: String, required: true},
    name: String,
    color: String,
    exercises: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Exercise' }],
    }, {timestamps: true})

const Category = mongoose.models.Category || mongoose.model('Category', categorySchema);

export default Category;