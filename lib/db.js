import mongoose from "mongoose";

const MONGODB_URI = process.env.NEXT_PUBLIC_MONGODB_URI;

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
