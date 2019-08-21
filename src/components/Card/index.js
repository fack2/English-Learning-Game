import React from "react";
import score from "../Game"

const Card = ({ image, name}) => (
  <div>
    <img class="image" src={image} alt={name} />
  </div>
);

export default Card;
