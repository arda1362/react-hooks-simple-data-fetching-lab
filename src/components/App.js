// create your App component here
import React, { useEffect, useState } from "react";

function App() {
  const [dogImage, setDogImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch a random dog image from the API
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setDogImage(data.message);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching dog image:", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <h2>Random Dog Image</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <img src={dogImage} alt="A Random Dog" />
      )}
    </div>
  );
}

export default App;
