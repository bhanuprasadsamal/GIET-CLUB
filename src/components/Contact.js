import React from 'react';
import './Contact.css'; // Import the CSS file

const ContactPage = () => {
  return (
    <div className="container mt-5 contact-container">
      <div className="text-center mb-4"> {/* Added mb-4 class to add some margin below */}
        <h1 className="contact-heading">Contact Us</h1>
        <p className="contact-heading">Feel free to get in touch with us!</p>
      </div>
      <div className="d-flex justify-content-center"> {/* Added d-flex, justify-content-center class */}
        <form action="https://formspree.io/f/mzbnkeel" method="post">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Your Name</label>
            <input type="text" className="form-control" id="name" name="name" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Your Email</label>
            <input type="email" className="form-control" id="email" name="email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea className="form-control" id="message" name="message" rows="5" required></textarea>
          </div>
          <div className="d-grid gap-2"> {/* Added d-grid, gap-2 class for button alignment */}
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
