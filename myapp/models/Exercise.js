import mongoose from "mongoose";


const ExerciseSchema = new mongoose.Schema({
    name: { type: String },
    date: { type: Date },
    duration: { type: Number }, 
    distance: { type: Number },
    calories: { type: Number },
    notes: { type: String },
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },

  });

export default mongoose?.models?.Exercise || mongoose.model("Exercise", ExerciseSchema)