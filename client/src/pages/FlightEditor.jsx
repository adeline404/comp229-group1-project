import React from "react";
import "../assets/styles/flighteditor.css";
import flightLogo from "../assets/img_head_foot/flight_icon.png";


const FlightEditor = () => {
    const [flights, setFlights] = React.useState([
        { id: 1, number: 'AA123', from: 'New York', to: 'Los Angeles', date: '2024-08-01', price: 300 },
        { id: 2, number: 'UA456', from: 'Chicago', to: 'Miami', date: '2024-08-15', price: 200 },
        { id: 3, number: 'DL789', from: 'Seattle', to: 'Denver', date: '2024-09-01', price: 150 },
    ]);

    const [newFlight, setNewFlight] = React.useState({
        number: '',
        from: '',
        to: '',
        date: '',
        price: 0,
    });

    const [editingFlight, setEditingFlight] = React.useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (editingFlight) {
            setEditingFlight({ ...editingFlight, [name]: value });
        } else {
            setNewFlight({ ...newFlight, [name]: value });
        }
    };

    const handleAddFlight = () => {
        setFlights([...flights, { id: flights.length + 1, ...newFlight }]);
        setNewFlight({ number: '', from: '', to: '', date: '', price: 0 });
    };

    const handleUpdateFlight = () => {
        setFlights(flights.map((flight) => (flight.id === editingFlight.id ? editingFlight : flight)));
        setEditingFlight(null);
        setNewFlight({ number: '', from: '', to: '', date: '', price: 0 });
    };

    const handleDeleteFlight = (id) => {
        setFlights(flights.filter((flight) => flight.id !== id));
    };

    const handleEditFlight = (flight) => {
        setEditingFlight(flight);
        setNewFlight(flight); // Set newFlight with the values of editingFlight to display them in the form
    };

    return (
        <div className="flightEditor">
            <header>
                <h1>Airline Website <img src={flightLogo} alt="Airline Logo"/></h1>
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
                            <tr key={flight.id}>
                                <td>{flight.number}</td>
                                <td>{flight.from}</td>
                                <td>{flight.to}</td>
                                <td>{flight.date}</td>
                                <td>${flight.price}</td>
                                <td>
                                    <button onClick={() => handleEditFlight(flight)}>Edit</button>
                                    <button onClick={() => handleDeleteFlight(flight.id)}>Delete</button>
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
                            value={editingFlight ? editingFlight.number : newFlight.from}
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
