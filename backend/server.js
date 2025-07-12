import express from "express";
import mongoose from "mongoose";
import cors from "cors";
 


const app = express();

app.use(cors());
app.use(express.json({limit: "40kb"}));
app.use(express.urlencoded({limit: "40kb", extended: true}))
 
app.use(express.static("uploads"))

app.set("port", process.env.PORT || 8000);


const start = async () => {
  app.set("mongo_user");
  const connectionDb = await mongoose.connect(
    "mongodb+srv://rethanya888:1YPMqaX4jPUUMGbK@mentalhealth.pyxl5jj.mongodb.net/?retryWrites=true&w=majority&appName=MentalHealth"
  );
  console.log(`MONGO Connected DB Host: ${connectionDb.connection.host}`);
  app.listen(app.get("port"), () => {
    console.log("Listening on port 8000");
  });
};

start();
