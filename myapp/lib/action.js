'use server'
import Exercise from "@/models/Exercise"
import connectDB from "./db"
import getServerUser from "./getServerUser"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"


export const addExercise = async (formData) => {
  const userId = await getServerUser(authOptions)
  const userEmail = userId.email
  console.log("UserId Email " + userEmail)
  const { name, date, duration, distance, calories, notes } =
  Object.fromEntries(formData);
  try {
      await connectDB()
      const newExercise = new Exercise({
          name, date, duration, distance, calories, notes
      })
      await newExercise.save()
  } catch (error) {
      throw new Error("Failed to create exercise! " + error);

  }
  revalidatePath("/dashboard");
  redirect("/dashboard");
}

export const updateExercise = async (formData) => {
    const { id, name, date, duration, distance, calories, notes } =
    Object.fromEntries(formData);
    try {
        await connectDB()
        const updateFields = {
            name, date, duration, distance, calories, notes
          };
      
          Object.keys(updateFields).forEach(
            (key) =>
              (updateFields[key] === "" || undefined) && delete updateFields[key]
          );
      
          await Exercise.findByIdAndUpdate(id, updateFields);
    } catch (error) {
        throw new Error("Failed to update exercise! " + error);

    }
    revalidatePath("/dashboard");
    redirect("/dashboard");
}