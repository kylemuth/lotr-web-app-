import React, { useState, useEffect } from "react";
import useFetchData from "../hooks/useFetchData";
import styles from "./dashboard.module.css";
import Options from "./Options";

export default function Dashboard() {
  const [selection, setSelection] = useState(false);
  const { data, loading, error } = useFetchData(selection);

  function onClickHandler() {
    setTruthy(!truthy);
  }

  return (
    <div className={styles.dashboard}>
      <div>
        <h1>LOTR Info</h1>
      </div>
      <Options selection={selection} setSelection={setSelection} />
    </div>
  );
}
