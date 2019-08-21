import React, { Component } from "react";
import vocabularies from "../../data";
import Card from "../Card";
import { randomPicker } from "../../utils/randomPicker";
import "./index.css";

class Game extends Component {
  state = {
    name: "Cherry",
    image:
      "https://www.khodarji.com/riyadh/ar/media/catalog/product/cache/4/thumbnail/9df78eab33525d08d6e5fb8d27136e95/c/h/cherry-01.jpg",
    score: 0
  };

  changeWord(vocabularies, name) {
    const randomItem = randomPicker(vocabularies);

    this.setState({ name: randomItem.name });
    this.setState(prevState => {
      console.log(name);
      if (this.state.name == name) {
        return { score: prevState.score + 3, name: randomItem.name };
      }
    });
  }

  render() {
    return (
      <div>
        <h2>{this.state.name}</h2>
        <h2>score {this.state.score}</h2>

        {
          (this.vocabulariesMap = vocabularies.map(({ name, image }) => (
            <button class="imageButton">
              <a
                href="#"
                onClick={() => {
                  this.changeWord(vocabularies, name);
                }}
              >
                <Card class="images" image={image} name={name} />
              </a>
            </button>
          )))
        }
      </div>
    );
  }
}

export default Game;
