import mongoose from "mongoose";

// enviroment variable must be defined
const { DATABASE_URL } = process.env;
if (!DATABASE_URL) {
  throw new Error("Databases Error");
}

const isConnected = {
  conn: false,
};

// connecting to databases
export const connectDB = async () => {
  try {
    if (isConnected.conn) {
      console.log("Databases Connected");
      return Promise.resolve(true);
    }
    const conn = await mongoose.connect(DATABASE_URL);

    if (conn.connection.readyState === 1) {
      isConnected.conn = true;
      console.log("Databases Connected");
      return Promise.resolve(true);
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error:", error);
    } else console.log(error);
  }
};

export const disconnectDB = async () => {
  await mongoose.disconnect();
};
