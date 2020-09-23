import React, { Component } from "react";
import axios from "axios";
import Card from "./Card";
import { v4 as uuidv4 } from "uuid";

import "./Preview.css";

class Preview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardDetails: [],
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
        console.log(response);
        this.setState({
          cardDetails: response.data,
          is_loading: false,
        });
      })
      .catch((err) => console.error(err));
  }
  render() {
    return (
      <div className="ListCards-main">
        {!this.state.is_loading ? (
              <div className="ListCards-list">
                <Card cardInfo={this.state.cardDetails} key={uuidv4()} />
              </div>
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

export default Preview;
