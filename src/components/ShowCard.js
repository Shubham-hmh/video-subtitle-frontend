

import React from 'react';
import { Link } from 'react-router-dom';

const ShowCard = ({ show }) => {
  return (
    <div className="card h-100 border-0 shadow">
      <img
        src={show.show.image?.medium}
        alt={show.show.name}
        className="card-img-top rounded"
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <div className="card-body">
        <h5 className="card-title">{show.show.name}</h5>
        <p className="card-text">
          <small className="text-muted">
            Type: {show.show.type} | Status: {show.show.status}
          </small>
        </p>
      </div>
      <div className="card-footer bg-transparent border-0">
        <Link to={`/show/${show.show.id}`} className="btn btn-primary">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ShowCard;
