import React, { useState, useEffect, useCallback } from "react";
import "../assets/styles/flighteditor.css";
import flightLogo from "../assets/img_head_foot/flight_icon.png";
import axios from "axios";

const FlightEditor = () => {
  const [flights, setFlights] = useState([]);
  const [newFlight, setNewFlight] = useState({
    number: "",
    from: "",
    to: "",
    date: "",
    price: 0,
  });

  const [editingFlight, setEditingFlight] = useState(null);

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const response = await axios.get("/api/flights");
        setFlights(response.data);
      } catch (error) {
        console.error("Error fetching flights:", error);
      }
    };
    fetchFlights();
  }, []);

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    if (editingFlight) {
      setEditingFlight((prev) => ({ ...prev, [name]: value }));
    } else {
      setNewFlight((prev) => ({ ...prev, [name]: value }));
    }
  }, [editingFlight]);

  const handleAddFlight = useCallback(async () => {
    try {
      const response = await axios.post("/api/flights", newFlight);
      setFlights((prev) => [...prev, response.data]);
      setNewFlight({ number: "", from: "", to: "", date: "", price: 0 });
    } catch (error) {
      console.error("Error adding flight:", error);
    }
  }, [newFlight]);

  const handleUpdateFlight = useCallback(async () => {
    try {
      await axios.put(`/api/flights/${editingFlight._id}`, editingFlight);
      setFlights((prev) =>
        prev.map((flight) =>
          flight._id === editingFlight._id ? editingFlight : flight
        )
      );
      setEditingFlight(null);
      setNewFlight({ number: "", from: "", to: "", date: "", price: 0 });
    } catch (error) {
      console.error("Error updating flight:", error);
    }
  }, [editingFlight]);

  const handleDeleteFlight = useCallback(async (id) => {
    try {
      await axios.delete(`/api/flights/${id}`);
      setFlights((prev) => prev.filter((flight) => flight._id !== id));
    } catch (error) {
      console.error("Error deleting flight:", error);
    }
  }, []);

  const handleEditFlight = useCallback((flight) => {
    setEditingFlight(flight);
    setNewFlight(flight);
  }, []);

  return (
    <div className="flightEditor">
      <header>
        <h1>
          Airline Website <img src={flightLogo} alt="Airline Logo" />
        </h1>
      </header>
      <main>
        <h2>Available Flights</h2>
        <table>
          <thead>
            <tr>
              <th>Number</th>
              <th>From</th>
              <th>To</th>
              <th>Date</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {flights.map((flight) => (
              <tr key={flight._id}>
                <td>{flight.number}</td>
                <td>{flight.from}</td>
                <td>{flight.to}</td>
                <td>{flight.date}</td>
                <td>${flight.price}</td>
                <td>
                  <button onClick={() => handleEditFlight(flight)}>Edit</button>
                  <button onClick={() => handleDeleteFlight(flight._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <h2>{editingFlight ? "Edit" : "Add"} a Flight</h2>
        <form>
          <label>
            Flight Number:
            <input
              type="text"
              name="number"
              value={editingFlight ? editingFlight.number : newFlight.number}
              onChange={handleInputChange}
            />
          </label>
          <label>
            From:
            <input
              type="text"
              name="from"
              value={editingFlight ? editingFlight.from : newFlight.from}
              onChange={handleInputChange}
            />
          </label>
          <label>
            To:
            <input
              type="text"
              name="to"
              value={editingFlight ? editingFlight.to : newFlight.to}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <br />
          <label>
            Date:
            <input
              type="date"
              name="date"
              value={editingFlight ? editingFlight.date : newFlight.date}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Price:
            <input
              type="number"
              name="price"
              value={editingFlight ? editingFlight.price : newFlight.price}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <br />
          {editingFlight ? (
            <button type="button" onClick={handleUpdateFlight}>
              Update Flight
            </button>
          ) : (
            <button type="button" onClick={handleAddFlight}>
              Add Flight
            </button>
          )}
        </form>
      </main>
    </div>
  );
};

export default FlightEditor;
