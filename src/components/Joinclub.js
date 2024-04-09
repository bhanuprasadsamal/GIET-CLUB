import React, { useState } from 'react';
import axios from 'axios';
import './Join.css';
import swal from 'sweetalert';
const JoinClubPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    image: null
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('message', formData.message);
    formDataToSend.append('image', formData.image);

    try {
      await axios.post('http://localhost:8000/api/join', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
        
      });
      swal("Join club", "You clicked the button!", "success");
      // Optionally, you can show a success message or redirect the user
    } catch (error) {
      console.error('Failed to join:', error);
      // Optionally, you can show an error message or handle the error
    }
  };

  return (
    <div className="container mt-5 join-container">
      <h1 className='joins'>Join Our Club</h1>
      <p className='joins'>Fill out the form below to become a member of our club!</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Your Name</label>
          <input type="text" className="form-control" id="name" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Your Email</label>
          <input type="email" className="form-control" id="email" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Tell us why you want to join</label>
          <textarea className="form-control" id="message" rows="5" onChange={handleChange}></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">Upload Your Image</label>
          <input type="file" className="form-control" id="image" accept="image/*" onChange={handleImageChange} />
        </div>
        <button type="submit" className="btn btn-primary btn-center">Join Now</button>
      </form>
    </div>
  );
}

export default JoinClubPage;
