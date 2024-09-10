import React, { useState, useEffect } from "react";

const FetchStatusComponent = ({ path }) => {
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Server URL - Replace this with your deployed server URL
  const serverURL = "https://j5nly4.csb.app/";

  useEffect(() => {
    setIsLoading(true);
    fetch(`${serverURL}${path}`)
      .then((response) => {
        if (!response.ok) {
          return response.json().then((data) => {
            let errorMessage = `HTTP error! status: ${response.status}`;
            if (data && data.error) {
              errorMessage = data.error.message;
            }
            throw new Error(errorMessage);
          });
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
  }, [path]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      Response from "{path}": {status}
    </div>
  );
};

export default FetchStatusComponent;
