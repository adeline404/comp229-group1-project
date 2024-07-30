import mongoose from "mongoose";

const FlightSchema = new mongoose.Schema({
  number: String,
  from: String,
  to: String,
  date: String,
  price: Number,
});

const Flight = mongoose.model("Flight", FlightSchema);

export default Flight;