import React, { useState, useEffect } from 'react';
import axios from 'axios';
import swal from 'sweetalert';

const AdminPage = () => {
  const [newEvent, setNewEvent] = useState({ name: "", date: "", time: "", location: "" });
  const [userData, setUserData] = useState([]);
  const [eventData, setEventData] = useState([]);
  const [currentTime, setCurrentTime] = useState("");
  useEffect(() => {
    fetchData();
    updateTime(); // Initial call to update time immediately
    const intervalId = setInterval(updateTime, 1000); // Update time every second
    return () => clearInterval(intervalId); // Cleanup function to clear interval on unmount
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/allData');
      setUserData(response.data.users);
      setEventData(response.data.events);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleUserDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/allData/users/${id}`);
      setUserData(userData.filter(user => user._id !== id));
      swal("Deleted!", "User has been deleted.", "success");
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleEventDelete = async (id) => {
    swal({
      title: "Are you sure?",
      text: "Your will not be able to recover this event!",
      icon: "warning",
      buttons: ["Cancel", "Yes, delete it!"],
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        try {
          await axios.delete(`http://localhost:8000/allData/events/${id}`);
          setEventData(eventData.filter(event => event._id !== id));
          swal("Deleted!", "Event has been deleted.", "success");
        } catch (error) {
          console.error('Error deleting event:', error);
        }
      }
    });
  };

  const handleAddEvent = async () => {
    try {
      await axios.post('http://localhost:8000/addEvent', newEvent);
      fetchData();
      swal("Success!", "Event added successfully.", "success");
      setNewEvent({ name: "", date: "", time: "", location: "" });
    } catch (error) {
      console.error('Error adding event:', error);
      swal("Error!", "Failed to add event.", "error");
    }
  };
  const updateTime = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    setCurrentTime(`${hours}:${minutes}:${seconds}`);
  };

  return (
    <div>
      <h2 className="text-uppercase text-center">Welcome back Admin</h2>
      <div className="current-time float-end text-white fw-bold">{currentTime}</div>
      <h3>User Data</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Email</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => (
            <tr key={user._id}>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>
                <button onClick={() => handleUserDelete(user._id)} style={{ backgroundColor: 'red', color: 'white' }}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Event Data</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Location</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {eventData.map((event) => (
            <tr key={event._id}>
              <td>{event.name}</td>
              <td>{event.date}</td>
              <td>{event.time}</td>
              <td>{event.location}</td>
              <td>
                <button onClick={() => handleEventDelete(event._id)} style={{ backgroundColor: 'red', color: 'white' }}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Add New Event</h3>
      <form>
        <input type="text" placeholder="Event Name" value={newEvent.name} onChange={(e) => setNewEvent({ ...newEvent, name: e.target.value })} />
        <input type="text" placeholder="Date" value={newEvent.date} onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })} />
        <input type="text" placeholder="Time" value={newEvent.time} onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })} />
        <input type="text" placeholder="Location" value={newEvent.location} onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })} />
        <button type="button" onClick={handleAddEvent} style={{ backgroundColor: 'green', color: 'white' }}>Add Event</button>
      </form>
    </div>
  );
};

export default AdminPage;
