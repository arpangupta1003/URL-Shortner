import React, { useState } from 'react';
import './UserForm.css';

function App() {
  const [originalURL, setOriginalURL] = useState('');
  const [keyword, setKeyword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the inputs (basic validation)
    if (!originalURL || !keyword) {
      setError('Both fields are required.');
      return;
    }

    if (!isValidUrl(originalURL)) {
      setError('Please enter a valid original URL.');
      return;
    }

    if (!isValidKeyword(keyword)) {
      setError('Keyword can only contain alphanumeric characters and dashes.');
      return;
    }

    // Send the data to the backend service
    try {
      const response = await fetch('http://localhost:8000/query/createShortcut', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          originalURL,
          shortURL: keyword,  // Change to shortUrl to match the schema
        }),
      });
      if(response.ok)
        {
          console.log(response);
        }
      if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.message || 'Something went wrong');
      }

      const result = await response.json();
      console.log(result);
      setSuccessMessage(`URL successfully shortened`);
      setError('');
    } catch (error) {
      console.log(error.message);
      setError('Failed to shorten the URL. Please try again. ' + error.message);
      setSuccessMessage('');
    }
  };

  const isValidUrl = (url) => {
    // A simple URL validation regex
    const regex = /^(http|https):\/\/[^ "]+$/;
    return regex.test(url);
  };

  const isValidKeyword = (keyword) => {
    // A simple keyword validation regex (alphanumeric characters and dashes)
    const regex = /^[a-zA-Z0-9-]+$/;
    return regex.test(keyword);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>URL Shortener</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="originalUrl">Original URL:</label>
            <input
              type="text"
              id="originalUrl"
              value={originalURL}
              onChange={(e) => setOriginalURL(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="keyword">Keyword:</label>
            <input
              type="text"
              id="keyword"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
          </div>
          <button type="submit">Shorten URL</button>
          {error && <p className="error">{error}</p>}
          {successMessage && <p className="success">{successMessage}</p>}
        </form>
      </header>
    </div>
  );
}

export default App;
