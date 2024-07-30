import Flight from "../models/flight.model.js";

const getFlights = async (req, res) => {
  try {
    const flights = await Flight.find();
    res.json(flights);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createFlight = async (req, res) => {
  const flight = new Flight(req.body);
  try {
    await flight.save();
    res.status(201).json(flight);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateFlight = async (req, res) => {
  try {
    const flight = await Flight.findById(req.params.id);
    if (!flight) return res.status(404).json({ message: "Flight not found" });
    Object.assign(flight, req.body);
    await flight.save();
    res.json(flight);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteFlight = async (req, res) => {
  try {
    const flight = await Flight.findById(req.params.id);
    if (!flight) return res.status(404).json({ message: "Flight not found" });
    await flight.remove();
    res.json({ message: "Flight deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default { getFlights, createFlight, updateFlight, deleteFlight };