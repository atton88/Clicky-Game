import React, { Component } from "react";
import Card from "../Card";
import Header from "../Header";
import cards from "../../cards.json";
import "./Container.css";


class Container extends Component {

  // Set initial state
  state = {
    cards: cards,
    score: 0,
    message: "Try not to click the same image twice",
    highScore: 0
  };

  // Randomize function and set state of cards
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

  // On click function of a card, will check logic for high score, win/lose condition, and update state
  handleClick = (id) => {

    // Filters out card with id clicked
    const cardPicked = this.state.cards.filter(card => card.id === id)[0]
    console.log(cardPicked)

    // Checks if card has been clicked already, if clicked already, we check high score and reset game
    if (cardPicked.hasClicked) {

      // reset clicked key of cards
      this.state.cards.forEach(elem => {
        elem.hasClicked = false;
      });

      // check for high score and set if true and reset game
      if (this.state.highScore < this.state.score){
        this.setState({
          highScore: this.state.score,
          message: "New high score!",
          score: 0,
          cards: cards
        })

      // if not a high score reset game
      } else {
        this.setState({
        message: "You guessed incorrectly. You Lose.",
        score: 0,
        cards: cards
      })
    }

    // If card has not been clicked yet, add 1 to score and randomize cards
    } else {
      cardPicked.hasClicked = true;
      this.setState({
        score: this.state.score + 1,
        message: "You guessed correctly!"
      });      
      this.randomize(cards);
    }
  }

  // renders header and cards, re-renders on state change
  render() {
    {console.log(this.state.cards)}
    return (
      <div className="bg-info">
        <Header score={this.state.score} message={this.state.message} highScore={this.state.highScore}/> {/*sends props to header component*/}
        <div className="container">
          
          {/* Map out all cards and returns array of new card components with props*/}  {/* changeState passes handleClick function as prop to Card component*/}
          {this.state.cards.map(card => (
            <Card 
              image={card.image} 
              key={card.id} 
              id={card.id} 
              hasClicked={card.hasClicked}
              changeState={this.handleClick}/>
          ))}
        </div>
      </div>
    );
  }
}
export default Container;
