import React, { useState, useEffect } from "react";

export const NoneResponse = ({ navigate }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("");

  // Server URL - Replace this with your deployed server URL
  const serverURL = "https://j5nly4.csb.app/";

  useEffect(() => {
    setIsLoading(true);
    fetch(`${serverURL}`)
      .then((response) => {
        if (!response.ok) {
          let errorMessage = `HTTP error! status: ${response.status}`;
          throw new Error(errorMessage);
        }
        return response.text();
      })
      .then((text) => {
        setStatus(text);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;

  if (error) {
    return <p>Error: {error}</p>;
  }

  // Check for "None Response" condition based on the received data
  if (status === "None Response") {
    return (
      <>
        <h1>None Response</h1>
        <p>Error: None Response</p>
        {/* Example of using navigate */}
        <button onClick={() => navigate("/some-other-route")}>
          Go to Other Route
        </button>
      </>
    );
  }

  // Render the received data
  return (
    <>
      <h1>None Response</h1>
      <div>Response from server: {status}</div>
      {/* Example of using navigate */}
      <button onClick={() => navigate("/some-other-route")}>
        Go to Other Route
      </button>
    </>
  );
};
