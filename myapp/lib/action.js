'use server'
import connectDB from "./db"
import Category from "@/models/Category"
import getServerUser from "./getServerUser"

export async function createCategory(form){
    await connectDB()
    try {
        const user = await getServerUser();
        const userEmail = user.email;
        
        if (!user) {
          throw new Error("User not found");
        }
    
        // Create a new category instance
        const newCategory = new Category({
          creator: userEmail,
          name: form.name,
          color: form.color,
        });
      // Save the category to the database
      const savedCategory = await newCategory.save();

      // Convert the Mongoose document to a plain object
      const plainCategory = savedCategory.toObject();
  
      // Convert nested properties to plain objects if needed
      plainCategory.creator = plainCategory.creator.toObject(); // Assuming creator is a Mongoose ObjectId
      // Convert other nested properties as needed
  
      // Return the plain object
      return plainCategory;
      } catch (error) {
        throw new Error("Failed to create category: " + error.message);
      }

}
