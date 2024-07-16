import React from "react";
import "../assets/styles/flighteditor.css"
import flightLogo from "../assets/img_head_foot/flight_icon.png"
const FlightEditor = () => {
    // const [newFlight, setNewFlight] = React.useState({
    //     id: '',
    //     from: '',
    //     to: '',
    //     date: '',
    //     price: 0,
    // });

    // const handleInputChange = (e) => {
    //     setNewFlight({ ...newFlight, [e.target.name]: e.target.value });
    // };

    // const handleAddFlight = () => {
    //     setFlights([...flights, { id: flights.length + 1, ...newFlight }]);
    //     setNewFlight({ from: '', to: '', date: '', price: 0 });
    // };

    // const handleDeleteFlight = (id) => {
    // setFlights(flights.filter((flight) => flight.id !== id));
    // };

    // return (
    // <div>
    //     <header>
    //     <h1>Airline Website</h1>
    //     <img src={flightLogo} alt="Airline Logo" />
    //     <button>Book a Flight</button>
    //     </header>
    //     <main>
    //     <h2>Available Flights</h2>
    //     <table>
    //         <thead>
    //         <tr>
    //             <th>From</th>
    //             <th>To</th>
    //             <th>Date</th>
    //             <th>Price</th>
    //             <th>Actions</th>
    //         </tr>
    //         </thead>
    //         <tbody>
    //         {flights.map((flight) => (
    //             <tr key={flight.id}>
    //             <td>{flight.from}</td>
    //             <td>{flight.to}</td>
    //             <td>{flight.date}</td>
    //             <td>${flight.price}</td>
    //             <td>
    //                 <button onClick={() => handleDeleteFlight(flight.id)}>Delete</button>
    //             </td>
    //             </tr>
    //         ))}
    //         </tbody>
    //     </table>
    //     <h2>Add a New Flight</h2>
    //     <form>
    //         <label>
    //         From:
    //         <input type="text" name="from" value={newFlight.from} onChange={handleInputChange} />
    //         </label>
    //         <label>
    //         To:
    //         <input type="text" name="to" value={newFlight.to} onChange={handleInputChange} />
    //         </label>
    //         <label>
    //         Date:
    //         <input type="date" name="date" value={newFlight.date} onChange={handleInputChange} />
    //         </label>
    //         <label>
    //         Price:
    //         <input type="number" name="price" value={newFlight.price} onChange={handleInputChange} />
    //         </label>
    //         <button type="button" onClick={handleAddFlight}>
    //         Add Flight
    //         </button>
    //     </form>
    //     </main>
    // </div>
    // );

    const [flights, setFlights] = React.useState([
        { id: 1, from: 'New York', to: 'Los Angeles', date: '2024-08-01', price: 300 },
        { id: 2, from: 'Chicago', to: 'Miami', date: '2024-08-15', price: 200 },
        { id: 3, from: 'Seattle', to: 'Denver', date: '2024-09-01', price: 150 },
      ]);

      const [newFlight, setNewFlight] = React.useState({
        from: '',
        to: '',
        date: '',
        price: 0,
      });

      const handleInputChange = (e) => {
        setNewFlight({ ...newFlight, [e.target.name]: e.target.value });
      };

      const handleAddFlight = () => {
        setFlights([...flights, { id: flights.length + 1, ...newFlight }]);
        setNewFlight({ from: '', to: '', date: '', price: 0 });
      };

      const handleDeleteFlight = (id) => {
        setFlights(flights.filter((flight) => flight.id !== id));
      };

      return (
        <div>
          <header>
            <h1>Airline Website</h1>
            <img src={flightLogo} alt="Airline Logo" height="40px"/>
            <button>Book a Flight</button>
          </header>
          <main>
            <h2>Available Flights</h2>
            <table>
              <thead>
                <tr>
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
                    <td>{flight.from}</td>
                    <td>{flight.to}</td>
                    <td>{flight.date}</td>
                    <td>${flight.price}</td>
                    <td>
                      <button onClick={() => handleDeleteFlight(flight.id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <h2>Add a New Flight</h2>
            <form>
              <label>
                From:
                <input type="text" name="from" value={newFlight.from} onChange={handleInputChange} />
              </label>
              <label>
                To:
                <input type="text" name="to" value={newFlight.to} onChange={handleInputChange} />
              </label>
              <label>
                Date:
                <input type="date" name="date" value={newFlight.date} onChange={handleInputChange} />
              </label>
              <label>
                Price:
                <input type="number" name="price" value={newFlight.price} onChange={handleInputChange} />
              </label>
              <button type="button" onClick={handleAddFlight}>
                Add Flight
              </button>
            </form>
          </main>
        </div>
      );
}

export default FlightEditor;