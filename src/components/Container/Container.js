import React, { Component } from "react";
import Card from "../Card";
import Header from "../Header";
import cards from "../../cards.json";
import "./Container.css";


class Container extends Component {
  state = {
    cards: cards,
    score: 0,
    message: "Try not to click the same image twice",
    highScore: 0
  };

 


  randomize = (arr) => {
    let currentIndex = arr.length, temporaryValue, randomIndex;
  
    while (0 !== currentIndex) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      temporaryValue = arr[currentIndex];
      arr[currentIndex] = arr[randomIndex];
      arr[randomIndex] = temporaryValue;
    }
  
    this.setState({
      cards: arr
    });
}

  handleClick = (id) => {
    const cardPicked = this.state.cards.filter(card => card.id === id)[0]
    console.log(cardPicked)

    if (cardPicked.hasClicked) {
      if (this.state.highScore < this.state.score){
        this.setState({
          highScore: this.state.score,
          message: "New high score!",
          score: 0
        })
      } else {
        this.state.cards.forEach(elem => {
          elem.hasClicked = false;
        });
        this.setState({
        message: "You guessed incorrectly. You Lose.",
        score: 0,
        cards: cards
      })
    }
    } else {
      cardPicked.hasClicked = true;
      this.setState({
        score: this.state.score + 1,
        message: "You guessed correctly!"
      });      
      this.randomize(cards);
    }
  }

  render() {
    {console.log(this.state.cards)}
    return (
      <div className="bg-info">
        <Header score={this.state.score} message={this.state.message} highScore={this.state.highScore}/>
        <div className="container">
          
          {this.state.cards.map(card => (
            <Card 
              image={card.image} 
              key={card.id} 
              id={card.id} 
              hasClicked={card.hasClicked}
              changeState={this.handleClick}/>
          ))}
          {/* <Footer /> */}
        </div>
      </div>
    );
  }
}
export default Container;
