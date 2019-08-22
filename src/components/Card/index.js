import React from "react";
import './index.css'

const Card = ({ image, name, isCorrect, setAnswer, index, ...props}) => (
  <div {...props} id={index} onClick={() => setAnswer(name, index)}>
    <img src={image} alt={name} />
    {isCorrect && <p>hello</p>}
  </div>
);

export default Card;