import React, { useState, useEffect } from "react";
import styles from "./dashboard.module.css";
import Options from "./Options";

export default function Dashboard() {
  const [truth, setTruthy] = useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const questions = ["character", "movie", "book"];

  const apiUrl = "https://the-one-api.dev/v2";

  const APITOKEN = process.env.REACT_APP_API_KEY;

  function onClickHandler() {
    setTruthy(!truthy);
  }

  useEffect(() => {
    async function fetchData() {
      const url = apiUrl + "/" + "book";
      try {
        const res = await fetch(url);
        const jsonData = await res.json();
        console.log("DATA: " + jsonData);
        setData(jsonData);
        console.log(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div className={styles.dashboard}>
      <Options />
    </div>
  );
}
