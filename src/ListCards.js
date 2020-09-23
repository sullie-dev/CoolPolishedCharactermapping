import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "./ListCards.css";

import axios from "axios";
import CardPreview from "./CardPreview";

class ListCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardInfo: [],
      is_loading: true,
    };
  }

  componentDidMount() {
    const cardID = this.props.info.id;
    const url = `https://waterlogged-bland-startup.herokuapp.com/cardholder/${cardID}`;
    const nocors = `https://cors-anywhere.herokuapp.com/`;
    axios
      .get(nocors + url)
      .then((response) => {
        this.setState({
          cardInfo: response.data.data, 
          is_loading: false,
        });
      })
      .catch((err) => console.error(err));
  }
  render() {
    console.log(this.state.cardInfo);

    return (
      <div className="ListCards-main">
        {!this.state.is_loading ? (
          this.state.cardInfo.map((c) => {
            return (
              <div className="ListCards-list">
                <CardPreview cardInfo={c} key={uuidv4()} />
              </div>
            );
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
