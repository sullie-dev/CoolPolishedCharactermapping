import React, { Component } from "react";
import "./CardPreview.css";

class CardPreview extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(evt) {
    evt.preventDefault();
    this.setState({ isViewable: !this.state.isViewable });
  }
  render() {
    const link =`/dashboard/card/${this.props.cardInfo.id}`
    return (
      <div className="Card-Parent">
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
          <a href={link}>View card info</a>
      </div>
    );
  }
}

export default CardPreview;