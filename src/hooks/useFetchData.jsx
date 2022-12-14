import React, { useState, useEffect } from "react";

export default function useFetchData(selection) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiUrl = "https://the-one-api.dev/v2";

  const APITOKEN = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    if (!selection) {
      return;
    }
    async function fetchData() {
      const url = apiUrl + "/" + "book";
      try {
        const res = await fetch(url);
        const jsonData = await res.json();
        setData(jsonData);
        console.log(jsonData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return { data, error, loading };
}
