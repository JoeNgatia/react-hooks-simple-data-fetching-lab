// create your App component here
import React, { useState, useEffect } from 'react';

const App = () => {
  const [dogImage, setDogImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const fetchDogImage = async () => {
      try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        setDogImage(data.message); // Set the dog image URL
        setLoading(false); // Set loading to false once the image is loaded
      } catch (error) {
        console.error('Error fetching dog image:', error);
        setLoading(false); // Set loading to false in case of error
      }
    };

    fetchDogImage(); // Call the function to fetch data
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div>
      {loading ? (
        <p>Loading...</p> // Show loading text while fetching
      ) : (
        <img src={dogImage} alt="A Random Dog" /> // Show dog image after fetching
      )}
    </div>
  );
};

export default App;
