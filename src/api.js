const API_URL = 'https://api.tvmaze.com';

export const fetchShows = async () => {
  const response = await fetch(`${API_URL}/search/shows?q=all`);
  const data = await response.json();
  return data;
};

export const fetchShowDetails = async (showId) => {
  const response = await fetch(`${API_URL}/shows/${showId}`);
  const data = await response.json();
  return data;
};

// Other API-related functions can be added here
