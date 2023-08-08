import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { fetchShows } from '../../../api';

function ShowSummary() {
      const [shows, setShows] = useState([]);

      useEffect(() => {
            fetchShows()
          .then(data => setShows(data)); })

  return (
      <div className="container mt-5">
      <h1 className="mb-4">TV Shows</h1>
      <ul className="list-group">
        {shows.map(show => (
          <li key={show.show.id} className="list-group-item d-flex justify-content-between align-items-center shadow-sm">
            <h1 to={`/show/${show.show.id}`}>{show.show.name}</h1>
            <Link to={`/show/${show.show.id}`} className="btn btn-primary">View Summary</Link>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default ShowSummary;
