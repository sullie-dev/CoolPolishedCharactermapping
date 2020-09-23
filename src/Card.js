import React, { Component } from "react";
import "./Card.css";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isViewable: false,
      is_loading: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(evt) {
    evt.preventDefault();
    console.log("clicked")
    this.setState({ isViewable: !this.state.isViewable });
  }
  render() {
    const lNum = this.props.cardInfo.number
    const lNumSorted = [...lNum].map((d, i) => (i) % 4 === 0 ? ' ' + d : d).join('').trim()

    return (
      <div className="Card-Parent">
        {this.state.isViewable ? (
          <div className="Card">
            <h2 className="Card-Number">{lNumSorted}</h2>
            <h3 className="Card-eDate">
              {" "}
              Exp Date: {this.props.cardInfo.exp_month} {" "} {this.props.cardInfo.exp_year}
            </h3>
            <h3 className="Card-CVC">CVC: {this.props.cardInfo.cvc}</h3>
            <div className="Card-Name">
              <h3>
              <span>{this.props.cardInfo.name}</span>
              </h3>
            </div>
          </div>
        ) : (
          <div className="Card">
            <h2 className="Card-Number">
              **** **** **** {this.props.cardInfo.last4}
            </h2>
            <h3 className="Card-eDate">
            Exp Date: {this.props.cardInfo.exp_month} {" "} {this.props.cardInfo.exp_year}
            </h3>
            <h3 className="Card-CVC">CVC: ***</h3>
            <div className="Card-Name">
              <h3>
                <span>{this.props.cardInfo.name}</span>
              </h3>
            </div>
          </div>
        )}
        <span className="Visable">
            <h3>Hide card details</h3>{" "}
            <button onClick={this.handleClick}>
              <i className= {this.state.isViewable ?"far fa-eye-slash fa-2x" :"far fa-eye fa-2x" }></i>
            </button>
          </span>
      </div>
    );
  }
}

export default Card;