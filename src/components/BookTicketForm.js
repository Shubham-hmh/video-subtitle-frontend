import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const BookTicketForm = ({ show }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    time: '',
  });

  useEffect(() => {
    // Set initial values for prefilled fields when the show prop changes
    setFormData({
      name: '',
      email: '',
      time: '',
      showName: show?.name,
      showId: show?.id,
    });
  }, [show]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    const bookingInfo = {
      showId: formData.showId,
      showName: formData.showName,
      name: formData.name,
      email: formData.email,
      time: formData.time,
    };

    const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    bookings.push(bookingInfo);
    localStorage.setItem('bookings', JSON.stringify(bookings));

    // Clear form data after saving
    setFormData({
      name: '',
      email: '',
      time: '',
      showName: show.name,
      showId: show.id,
    });

    // Close the form or take other actions as needed
    console.log('Booking saved:', bookingInfo);
    alert("Booking Successful!")
    toast.success("Booking Successful!",{
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
    });
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Book Ticket</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="showName" className="form-label">
            Show Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="showName"
            name="showName"
            value={formData.showName}
            disabled
          />
        </div>
        <div className="mb-3">
          <label htmlFor="showId" className="form-label">
            Show ID:
          </label>
          <input
            type="text"
            className="form-control"
            id="showId"
            name="showId"
            value={formData.showId}
            disabled
          />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Your Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Your Email:
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="time" className="form-label">
            Preferred Time:
          </label>
          <input
            type="text"
            className="form-control"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            placeholder="Preferred Time"
          />
        </div>
        <button type="button" className="btn btn-primary" onClick={handleSave}>
          Save Booking
        </button>
      </form>
    </div>
  );
};

export default BookTicketForm;
