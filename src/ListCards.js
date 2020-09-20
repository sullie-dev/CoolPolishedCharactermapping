import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "./ListCards.css";

import axios from "axios";
import Card from "./Card";

class ListCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardInfo: [],
      is_loading: true,
    };
  }

  componentDidMount() {
    const cardID = this.props.match.params.id;
    const url = `https://waterlogged-bland-startup.herokuapp.com/${cardID}`;
    const nocors = `https://cors-anywhere.herokuapp.com/`;
    axios
      .get(nocors + url)
      .then((response) => {
        this.setState({
          cardInfo: [...this.state.cardInfo, response.data],
          is_loading: false,
        });
      })
      .catch((err) => console.error(err));
  }
  render() {
    return (
      <div className="ListCards-main">
        {!this.state.is_loading ? (
          this.state.cardInfo.map((c) => {
            return <Card cardInfo={c} key={uuidv4()} />;
          })
        ) : (
          <div>
            <div
              className={!this.state.is_loading ? "" : "triforce-container"}
            ></div>
            <div className={!this.state.is_loading ? "" : "triforce"}></div>
          </div>
        )}
      </div>
    );
  }
}

export default ListCards;
