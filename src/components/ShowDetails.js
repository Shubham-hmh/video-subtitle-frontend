import React, { useEffect, useState } from 'react';
import { useParams ,Link } from 'react-router-dom';
import BookTicketForm from './BookTicketForm';

const ShowDetails = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => response.json())
      .then((data) => setShow(data));
  }, [id]);

  return (
    <div className="container mt-4">
      {show && (
        <div>
        <Link to="/" className="btn btn-secondary mb-3">
            Back to Home
          </Link>
          <div className="row">
            <div className="col-md-4">
              <img
                src={show.image.original}
                alt={show.name}
                className="img-fluid rounded"
              />
            </div>
            <div className="col-md-8">
              <h1>{show.name}</h1>
              <p dangerouslySetInnerHTML={{ __html: show.summary }}></p>
              <p>
                <strong>Language:</strong> {show.language}
              </p>
              <p>
                <strong>Rating:</strong> {show.rating.average}
              </p>
            </div>
          </div>

          <BookTicketForm show={show} />

        </div>
        
      )}
    </div>
  );
};

export default ShowDetails;
