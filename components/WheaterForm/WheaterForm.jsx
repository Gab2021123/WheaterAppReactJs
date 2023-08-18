import { useState } from "react";
import style from "../Wheater.module.css";
export default function WheaterForm({ cityChange }) {
  const [city, setCity] = useState("");

  function handleChange(e) {
    const value = e.target.value;

    if (value != "") {
      setCity(value);
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    cityChange(city);
  }
  return (
    <form className={style.wheaterForm} onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} />
    </form>
  );
}
