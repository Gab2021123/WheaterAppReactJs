import React, { ReactDOM } from "react";
import style from "../Wheater.module.css";
export default function WheaterMainInfo({ wheater }) {
  return (
    <>
      <div className={style.wheaterMainInfo}>
        <article className={style.wheaterOptions}>
          <h1>{wheater?.current.temp_c}</h1>
          |
          <img
            src={wheater?.current.condition.icon}
            alt={wheater?.current.condition.text}
          />
          |<h1>{wheater?.location.name}</h1>
        </article>
        <article>
          <iframe
            title="mapas"
            src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d62432.62720609917!2d${wheater?.location.lon}9!3d${wheater?.location.lat}8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2spe!4v1692055330662!5m2!1ses-419!2spe`}
            width="600"
            height="450"
            style={{
              marginRight: 2 + "px",
              background:
                "linear-gradient(360deg,rgb(0,255,255) 50%,rgb(255,255,255)) 25%,rgb(127,89,64) 25%",
              padding: 4 + "px",
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </article>
      </div>
    </>
  );
}
