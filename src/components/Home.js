import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ShowCard from './ShowCard';
import BookTicketForm from './BookTicketForm';

const Home = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then((response) => response.json())
      .then((data) => setShows(data));
  }, []);

return (
    <div className="container mt-4">
      <h1 className="mb-4">TV Shows</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {shows.map((show) => (
          <div key={show.show.id} className="col mb-4">
            <ShowCard show={show} />
          </div>
        ))}
      </div>
      <div className="modal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Booking Form</h5>
                <button type="button" className="btn-close" ></button>
              </div>
              <div className="modal-body">
                <BookTicketForm/>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Home;
