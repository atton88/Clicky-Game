import React, { Component } from "react";
import Card from "../Card";
import Header from "../Header";
import cards from "../../cards.json";
import "./Container.css";

// import Footer from "./Footer";

class Container extends Component {
  state = {
    cards: cards
  };

  // handlePageChange = page => {
  //   this.setState({ currentPage: page });
  // };

  render() {
    return (
      <div>
        <Header />
        <div class="container">
          
          {this.state.cards.map(cards => (
            <Card image={cards.image} />
          ))}
          {/* <Footer /> */}
        </div>
      </div>
    );
  }
}
export default Container;
