import mongoose from "mongoose";

export const connectdb=async()=>{
    try{
        await mongoose.connect(process.env.mongodb_uri);
        console.log("Database Connected");
        
    }catch(error){
        console.log(error);
        
    }
    
}
export default connectdb