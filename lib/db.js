import mongoose from "mongoose";

const  MONGODB_URI = 'MONGODB_URI=mongodb+srv://mishrakasha1:MAAZFy88f3SqFXJY@cluster0.up14s.mongodb.net/?retryWrites=true&w=majority';

const connect = async () => {
  const connectionState = mongoose.connection.readyState;
  if (connectionState === 1) {
    console.log("Altready Connected");
    return;
  }

  if (connectionState === 2) {
    console.log("Connecting");
    return;
  }
  try {
    mongoose.connect(MONGODB_URI, {
      dbName: "dashboard-next-14-rest",
      bufferCommands: true,
    });
    console.log("Connected");
  } catch (err) {
    console.log("Connection Failed", err);
  }
};

export default connect;
