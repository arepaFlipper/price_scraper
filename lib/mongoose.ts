import mongoose from "mongoose";

let is_connected = false; //Variable to track the connection status

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URI) {
    return console.log("MONGODB_URI is not defined");
  };

  if (is_connected) {
    return console.log("=> using existing database connection");
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);

    is_connected = true;
  } catch (error) {

  }
}
