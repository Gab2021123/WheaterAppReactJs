import { useState, useEffect, React } from "react";
import WheaterForm from "../WheaterForm/WheaterForm";
import WheaterMainInfo from "../WheaterMain/WheaterMainInfo";
import { motion, useAnimation } from "framer-motion";
import style from "../Wheater.module.css";
export default function WheaterApp() {
  const [wheater, setWheater] = useState(null);

  async function loadInfo(city = "london") {
    try {
      const request = await fetch(
        `${import.meta.env.VITE_APP_URL}&key=${
          import.meta.env.VITE_API_KEY
        }&q=${city}`
      );
      const json = await request.json();
      setWheater(json);
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    loadInfo();
  }, []);
  useEffect(() => {
    document.title = `Wheater | ${wheater?.location.name ?? ""}`;
  }, [wheater]);
  function handleChangeCity(city) {
    setWheater(null);
    loadInfo(city);
  }
  return (
    <>
      <motion.circle
        className={style.wheaterContainer}
        cx={500}
        animate={{ cx: [null, 100] }}
        transition={{ ease: "easeInOut", duration: 2 }}
      >
        <WheaterForm cityChange={handleChangeCity} />
        <WheaterMainInfo wheater={wheater} />
      </motion.circle>
    </>
  );
}
