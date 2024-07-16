const mongoose = require('mongoose');
const flight = require('../models/FlightModel');

exports.getFlights = async (req, res) => {
  try {
    // Get the name from the URL
    const queryString = req.url.split('?')[1];
    const urlParams = new URLSearchParams(queryString);
    const urlName = urlParams.get('name');

    // If urlName is present, search by name
    if (urlName) {
      const query = { name: { $regex: new RegExp(urlName, 'i') } };
      const flights = await flight.find(query);
      if (flights.length === 0) {
        return res.status(404).json({ message: 'Flight not found' });
      }
      res.json(flights);
    }
    // If urlName is not present, retrieve all flights
    else {
      const flights = await flight.find();
      res.json(flights);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



exports.getFlightById = async (req, res) => {
  try {
    const { id } = req.params;
    let idType;

    if (mongoose.Types.ObjectId.isValid(id)){
      idType = 'objectId'
    }else{
      idType = 'flightId'
    }

    // Check if the input is a valid ObjectId
    if (idType === 'objectId') {
      const flight = await flight.findById(id);
      if (!flight) {
        return res.status(404).json({ message: 'flight not found' });
      }
      res.json(flight);
    }

    // If the input is not a valid ObjectId, search by flight_id
    if(idType === 'flightId'){
      const flight = await flight.findOne({ flight_id: id });
      if (!flight) {
        return res.status(404).json({ message: 'flight not found' });
      }
      res.json(flight);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createFlight = async (req, res) => {
  const flight = new flight(req.body);
  try {
    const newflight = await flight.save();
    res.status(201).json(newflight);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateflight = async (req, res) => {
  try {
    const { id } = req.params;
    let idType;

    // Check if the input is a valid ObjectId
    if (mongoose.Types.ObjectId.isValid(id)) {
      idType = 'objectId';
    } else {
      idType = 'flightId';
    }

    let flight;

    // Check if the input is a valid ObjectId
    if (idType === 'objectId') {
      flight = await flight.findById(id);
      if (!flight) {
        return res.status(404).json({ message: 'flight not found' });
      }
    } else {
      // Check if the input is a valid flightId
      flight = await flight.findOne({ flight_id: id });
      if (!flight) {
        return res.status(404).json({ message: 'flight not found' });
      }
    }

    // Update the flight
    Object.assign(flight, req.body);
    const updatedFlight = await flight.save();
    res.json({ flight: updatedFlight, idType });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteFlights = async (req, res) => {
  try {
    await flight.deleteMany({});
    res.json({ message: 'All flights deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteFlightById = async (req, res) => {
  try {
    const { id } = req.params;
    let idType;

    // Check if the input is a valid ObjectId
    if (mongoose.Types.ObjectId.isValid(id)) {
      idType = 'objectId';
    } else {
      idType = 'flightId';
    }

    let flight;

    // Delete the flight based on the idType
    if (idType === 'objectId') {
      flight = await flight.findById(id);
      if (!flight) {
        return res.status(404).json({ message: 'flight not found' });
      }
      await flight.deleteOne();
    } else if (idType === 'flightId') {
      flight = await flight.findOne({ flight_id: id });
      if (!flight) {
        return res.status(404).json({ message: 'flight not found' });
      }
      await flight.deleteOne();
    } else {
      return res.status(400).json({ message: 'Invalid flight ID format' });
    }

    res.json({ message: 'Flight deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
