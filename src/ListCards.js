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
<<<<<<< HEAD
  }

  componentDidMount() {
=======
    this.isLoadingTimer = this.isLoadingTimer.bind(this);
  }

  isLoadingTimer() {
    setInterval(() => {
      this.setState({ is_loading: false });
    }, 3000);
  }
  componentDidMount() {
    this.isLoadingTimer();
>>>>>>> d6a0c6d1e17f1f5eb889c4c20fb90b59b00dd859
    const cardID = this.props.match.params.id;
    const url = `https://waterlogged-bland-startup.herokuapp.com/${cardID}`;
    const nocors = `https://cors-anywhere.herokuapp.com/`;
    axios
      .get(nocors + url)
      .then((response) => {
<<<<<<< HEAD
        this.setState({
          cardInfo: [...this.state.cardInfo, response.data],
          is_loading: false,
        });
=======
        this.setState({ cardInfo: [...this.state.cardInfo, response.data] });
>>>>>>> d6a0c6d1e17f1f5eb889c4c20fb90b59b00dd859
      })
      .catch((err) => console.error(err));
  }
  render() {
    const listC = this.state.cardInfo.map((c) => {
<<<<<<< HEAD
      return <Card cardInfo={c} key={uuidv4()} />;
    });

    return (
      <div className={!this.state.is_loading ? "" : "triforce-container"}>
        <h1>CardViewer</h1>
        <div className={!this.state.is_loading ? "" : "triforce"}></div>
=======
      return this.state.is_loading === true ? (
        <div className="triforce-container">
          <div className="triforce"></div>
        </div>
      ) : (
        <Card cardInfo={c} key={uuidv4()} />
      );
    });

    return (
      <div>
        <h1>CardViewer</h1>
>>>>>>> d6a0c6d1e17f1f5eb889c4c20fb90b59b00dd859
        {listC}
      </div>
    );
  }
}

export default ListCards;
