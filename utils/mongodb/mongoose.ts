import mongoose from "mongoose";
const connectMongoDB = async () => {
  try{
    const uri = process.env.MONGODB_URI;
    mongoose.connect(uri)
    console.log("connected to mongodb ")
  }catch(error){
    console.error(error)
  }
}

export default connectMongoDB