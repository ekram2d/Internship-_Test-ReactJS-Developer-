import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchShowDetails } from '../../../api';

function BookTicketForm() {
      const { id } = useParams(); // Get the show ID from URL params
      const [show, setShow] = useState(null);
      const [userName, setUserName] = useState('');
      const [userEmail, setUserEmail] = useState('');
      const [book, setBook] = useState(false);
      const [bookingComplete, setBookingComplete] = useState(false); // New state variable
      const navigate=useNavigate();
      useEffect(() => {
            fetchShowDetails(id)
                  .then(data => setShow(data));
      }, [id]);

      const handleSubmit = (event) => {
            event.preventDefault();
          
            // Check if the user has already booked this movie
            const existingBookingData = JSON.parse(localStorage.getItem('bookingData'));
            if (existingBookingData && existingBookingData.showId == id && existingBookingData.userEmail == userEmail) {
              // User has already booked this movie, show an alert
              window.alert('You have already booked this movie.');
            //   setBookingComplete(true);
            navigate('/');

              return;
            }
          
            const bookingData = {
              showId: id,
              movieName: show.name,
              movieDetails: {
                genres: show.genres,
                language: show.language,
                schedule: `${show.schedule.days.join(', ')} at ${show.schedule.time}`
              },
              userName,
              userEmail
            };
          
            // Store the object in local storage
            localStorage.setItem('bookingData', JSON.stringify(bookingData));
          
            // Set bookingComplete to true after successful booking
            setBookingComplete(true);
          };
          

      if (!show) {
            return <div>Loading...</div>;
      }

      return (
            <div className="container mt-5">
                  <div className="row">
                        <div className="col-md-4">
                              <img src={show.image.medium} alt={show.name} className="img-fluid rounded shadow" />
                        </div>
                        <div className="col-md-8">
                              <h2>{show.name}</h2>
                              <p className="lead">{show.summary}</p>
                              <p><strong>Genres:</strong> {show.genres.join(', ')}</p>
                              <p><strong>Status:</strong> {show.status}</p>
                              <p><strong>Language:</strong> {show.language}</p>
                              <p><strong>Average Rating:</strong> {show.rating.average}</p>
                              <p><strong>Runtime:</strong> {show.runtime} minutes</p>
                              <p><strong>Schedule:</strong> {show.schedule.days.join(', ')} at {show.schedule.time}</p>
                              <a href={show.officialSite} target="_blank" rel="noopener noreferrer" className="btn btn-primary mr-3">
                                    Official Site
                              </a>
                              <div>
                                    {!bookingComplete && (
                                          <button
                                                onClick={() => setBook(!book)}
                                                className="btn btn-primary mt-3"
                                                disabled={book} // Disable the button when booking is in progress
                                          >
                                                Book a Movie Ticket
                                          </button>
                                    )}
                              </div>
                        </div>
                  </div>

                  {book && !bookingComplete && (
                        <div>
                              <form onSubmit={handleSubmit}>

                                    <div className="form-group">
                                          <label htmlFor="movieName">Movie Name</label>
                                          <input
                                                type="text"
                                                id="movieName"
                                                className="form-control"
                                                value={show.name}
                                                readOnly
                                          />
                                    </div>
                                    <div className="form-group">
                                          <label htmlFor="movieDetails">Movie Details</label>
                                          <textarea
                                                id="movieDetails"
                                                className="form-control"
                                                value={`Genres: ${show.genres.join(', ')}\nLanguage: ${show.language}\nSchedule: ${show.schedule.days.join(', ')} at ${show.schedule.time}`}
                                                readOnly
                                          />
                                    </div>
                                    <div className="form-group">
                                          <label htmlFor="userName">Your Name</label>
                                          <input
                                                type="text"
                                                id="userName"
                                                className="form-control"
                                                value={userName}
                                                onChange={(e) => setUserName(e.target.value)}
                                                required
                                          />
                                    </div>
                                    <div className="form-group">
                                          <label htmlFor="userEmail">Your Email</label>
                                          <input
                                                type="email"
                                                id="userEmail"
                                                className="form-control"
                                                value={userEmail}
                                                onChange={(e) => setUserEmail(e.target.value)}
                                                required
                                          />
                                    </div>
                                    <button type="submit" className="btn btn-primary">
                                          Book Ticket
                                    </button>




                              </form>
                        </div>
                  )}

                  {bookingComplete && (
                        <div className="alert alert-success mt-3">
                              Booking successful! Thank you for booking.
                        </div>
                  )}
            </div>
      );
}

export default BookTicketForm;
