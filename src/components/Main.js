import React, { Component } from "react";
import { MainC, Button, Card } from "../styles";

class Main extends Component {
  state = {
    url: [
      "https://media.giphy.com/media/1gVUhlXhETaRRxzeHO/giphy.gif",
      "https://thumbs.gfycat.com/ColorfulAmusingHadrosaurus-size_restricted.gif",
      "https://media3.giphy.com/media/m32zTHRBlr8WY/source.gif"
    ],
    counter: 0
  };
  changeCounter = e => {
    e.persist();

    console.log(e.target.name);

    // const newCounter
    //
    if (e.target.name === "goku") {
      this.setState({
        counter: 0
      });
    } else if (e.target.name === "freezer") {
      this.setState({
        counter: 1
      });
    } else {
      this.setState({
        counter: 2
      });
    }

    console.log(this.state.counter);
  };
  render() {
    return (
      <MainC>
        <h1>Son Goku</h1>
        <div className="gokuButtons">
          <Button name="goku" onClick={this.changeCounter}>
            Goku
          </Button>
          <Button name="freezer" onClick={this.changeCounter}>
            Freezer
          </Button>
          <Button name="vegeta" onClick={this.changeCounter}>
            {" "}
            Vegeta
          </Button>
        </div>

        <div className="Cards">
          <Card type={this.state.url[this.state.counter]} />
        </div>
      </MainC>
    );
  }
}

export default Main;
