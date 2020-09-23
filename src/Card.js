import React, { Component } from "react";
import axios from 'axios'
import "./Card.css";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isViewable: false,
      is_loading: true,
      cardDetails:[]
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const cardID = this.props.cardId;
    const url = `https://waterlogged-bland-startup.herokuapp.com/${cardID}`;
    const nocors = `https://cors-anywhere.herokuapp.com/`;
    axios
      .get(nocors + url)
      .then((response) => {
        console.log(response)
        this.setState({
          cardDetails: [...this.state.cardDetails, response.data],
          is_loading: false,
        });
      })
      .catch((err) => console.error(err));
  }

  handleClick(evt) {
    evt.preventDefault();
    this.setState({ isViewable: !this.state.isViewable });
  }
  render() {
    const lNum = this.state.cardDetails.number
    const lNumSorted = [...lNum].map((d, i) => (i) % 4 === 0 ? ' ' + d : d).join('').trim()

    return (
      <div className="Card-Parent">
        {this.state.isViewable ? (
          <div className="Card">
            <h2 className="Card-Number">{lNumSorted}</h2>
            <h3 className="Card-eDate">
              {" "}
              Exp Date: {this.state.cardDetails.exp_month} {" "} {this.state.cardDetails.exp_year}
            </h3>
            <h3 className="Card-CVC">CVC: {this.state.cardDetails.cvc}</h3>
            <div className="Card-Name">
              <h3>
              <span>{this.state.cardDetails.name}</span>
              </h3>
            </div>
          </div>
        ) : (
          <div className="Card">
            <h2 className="Card-Number">
              **** **** **** {this.state.cardDetails.last4}
            </h2>
            <h3 className="Card-eDate">
            Exp Date: {this.state.cardDetails.exp_month} {" "} {this.state.cardDetails.exp_year}
            </h3>
            <h3 className="Card-CVC">CVC: ***</h3>
            <div className="Card-Name">
              <h3>
                <span>{this.state.cardDetails.name}</span>
              </h3>
            </div>
          </div>
        )}
        {this.state.isViewable ? (
          <span className="Visable">
            <h3>Hide card details</h3>{" "}
            <button onClick={this.handleClick}>
              <i className="far fa-eye-slash fa-2x"></i>
            </button>
          </span>
        ) : (
          <span className="Visable">
            <h3>Show card details</h3>{" "}
            <button onClick={this.handleClick}>
              <i className="far fa-eye fa-2x"></i>
            </button>
          </span>
        )}
      </div>
    );
  }
}

export default Card;