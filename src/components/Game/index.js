import React, { Component } from "react";
import vocabularies from "../../data";
import Card from "../Card";
import { randomPicker } from "../../utils/randomPicker";
import "./index.css";

class Game extends Component {
  state = {
    name: "Cherry",
    score: 0,
    image:
      "https://www.khodarji.com/riyadh/ar/media/catalog/product/cache/4/thumbnail/9df78eab33525d08d6e5fb8d27136e95/c/h/cherry-01.jpg"
  };

  changeWord(vocabularies) {
    const randomItem = randomPicker(vocabularies);
    this.setState({ name: randomItem.name });

    this.setState(prevState => {
      return { score: prevState.score + 3 };
    });
  }

  render() {
    return (
      <div>
        <h2>{this.state.name}</h2>
        <h2>score {this.state.score}</h2>

        {
          (this.vocabulariesMap = vocabularies.map(
            ({ vocabularyName, image }) => (
              <button class="imageButton">
                <a
                  href="#"
                  onClick={() => {
                    this.changeWord(vocabularies);
                  }}
                >
                  <Card class="images" image={image} />
                </a>
              </button>
            )
          ))
        }
      </div>
    );
  }
}

export default Game;
