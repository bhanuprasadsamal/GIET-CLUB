import React, { useState } from 'react';
import swal from 'sweetalert';
const eventsData = {
  upcomingEvents: [
    {
      name: "Webinar on AI in Healthcare",
      date: "April 15, 2024",
      time: "10:00 AM - 12:00 PM",
      location: "Online",
    },
    {
      name: "Tech Conference 2024",
      date: "May 1-3, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Convention Center, San Francisco",
    },
    {
      name: "Workshop on Blockchain Technology",
      date: "June 5, 2024",
      time: "2:00 PM - 4:00 PM",
      location: "XYZ Co-working Space",
    }
  ],
  ongoingEvents: [
    {
      name: "Hackathon 2024",
      date: "April 1-10, 2024",
      time: "24 hours",
      location: "Online",
    },
    {
      name: "Art Exhibition",
      date: "March 15 - April 15, 2024",
      time: "10:00 AM - 6:00 PM",
      location: "City Art Gallery",
    },
    {
      name: "Fitness Challenge",
      date: "January 1 - April 30, 2024",
      time: "All day",
      location: "Various locations",
    }
  ],
  pastEvents: [
    {
      name: "Startup Weekend",
      date: "March 10-12, 2024",
      time: "6:00 PM - 10:00 PM",
      location: "Startup Hub",
    },
    {
      name: "Tech Summit 2023",
      date: "November 20-22, 2023",
      time: "9:00 AM - 5:00 PM",
      location: "Tech Center, New York",
    },
    {
      name: "Coding Bootcamp",
      date: "January 15 - March 15, 2024",
      time: "6:00 PM - 9:00 PM",
      location: "Code Academy",
    }
  ]
};


const Event = ({ event, userEmail }) => {
  const isPastEvent = eventsData.pastEvents.includes(event);

  const handleJoin = async () => {
    const message = "Some message"; // Get the message from user input or state
    const eventName = event.name; // Get the event name

    try {
      const response = await fetch("http://localhost:8000/api/join", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email: userEmail, message, eventName }) // Use userEmail instead of hardcoded email
      });
      
      const data = await response.json();
      console.log(data);// Log the response from the server
      swal("You are Register now!", "You clicked the button!", "success");
    } catch (error) {
      console.error("Error joining event:", error);
    }
  };

  return (
    <div className={`card mb-3${isPastEvent ? ' text-white bg-danger' : ''}`}>
      <div className="card-body">
        <h5 className="card-title">{event.name}</h5>
        <p className="card-text">
          <strong>Date:</strong> {event.date}<br />
          <strong>Time:</strong> {event.time}<br />
          <strong>Location:</strong> {event.location}
        </p>
        {!isPastEvent && <button className="btn btn-primary" onClick={handleJoin}>Join</button>}
      </div>
    </div>
  );
};

const EventSection = ({ events, title, userEmail }) => {
  return (
    <div>
      <h2>{title}</h2>
      {events.map((event, index) => (
        <Event key={index} event={event} userEmail={userEmail} />
      ))}
    </div>
  );
};

const EventList = ({ userEmail }) => {
  return (
    <div>
      <h2 className="text-uppercase text-center text-warning">Event Page</h2>
      <EventSection events={eventsData.upcomingEvents} title="Upcoming Events" userEmail={userEmail} />
      <EventSection events={eventsData.ongoingEvents} title="Ongoing Events" userEmail={userEmail} />
      <EventSection events={eventsData.pastEvents} title="Past Events" userEmail={userEmail} />
    </div>
  );
};

export default EventList;
