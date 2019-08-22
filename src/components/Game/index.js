import React, { Component } from "react";
import vocabularies from "../../data";
import Card from "../Card";
import { randomPicker } from "../../utils/randomPicker";

class Game extends Component {
  state = {
    word: "Cherry",
    answer: "",
    score: 0,
    isCorrect: false,
    id: null,
 
  };

  changeWord = () => {
    const randomItem = randomPicker(vocabularies);
    this.setState({ name: randomItem.name });
    this.setState(prevState => {
      return {
        word: randomItem.name
      };
    });
  };
  setAnswer = (name, id) => {
    this.setState({ answer: name, id, clicked: true }, () =>
      this.checkCorrectCard()
    );
  };

  checkCorrectCard = () => {
    const { word, answer } = this.state;
    if (word === answer) {
      this.setState(prevState => ({
        isCorrect: true,
        score: prevState.score + 3
      }));
      this.changeWord()
    }
    else{
      this.setState({isCorrect: false})

    }
      
  };

  clearAnswer= (name, id)=>{
    this.setState({ answer: name, id, clicked: false }, () =>
      this.checkCorrectCard()
    ); 
  }

  render() {
    const { word, score, id, clicked, isCorrect,count } = this.state;


  

    return (
      <div>
        <h2>{word}</h2>
        <h2>score: {score}</h2>
        {vocabularies.map(({ name, image }, i) => (
          <Card
            className={
              i === id
                ? isCorrect
                  ? "images correct"
                  : "images wrong"
                : "images"
            }
            key={name}
            image={image}
            name={name}
            index={i}
         
            setAnswer={clicked ?  this.clearAnswer : this.setAnswer }          />
        ))}
        {isCorrect && <p>This is correct! YAYYYYYYYYYYYYY</p>}
      </div>
    );
  }
}

export default Game;
