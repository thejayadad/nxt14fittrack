'use server'
import Exercise from "@/models/Exercise"
import connectDB from "./db"

export const getExercises = async () => {
    try {
        await connectDB()
        const exercises = await Exercise.find({})
        return exercises
    } catch (error) {
        throw new Error("Failed to fetch exercises! " + error);
    
    }
}
export const getSingleExercise = async (id) => {
try {
    await connectDB()
    const exercise = Exercise.findById(id)
    return exercise
} catch (error) {
    throw new Error("Failed to fetch exercise! " + error);

}
}