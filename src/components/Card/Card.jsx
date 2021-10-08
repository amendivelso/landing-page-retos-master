/* eslint-disable react/jsx-no-target-blank */
// src/components/Card/Card.js
// Card component to display details

import React from "react";
import style from './Card.module.css'

function Card({ reto }) {
  return (
    <div className={style.card} >
      <img className={style.img} src={reto.imgPath} alt={reto.name} />
      <div className={style.card_info}>
        <h3>{reto.name}</h3>
        <p><a href={reto.retoPath} target="_blank">Link del Reto</a></p>
      </div>
    </div>
  );
}

export default Card;
