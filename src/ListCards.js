import React, { Component } from 'react'
import { v4 as uuidv4 } from "uuid";

import axios from 'axios'
import Card from './Card';

class ListCards extends Component{
    constructor(props){
        super(props);
        this.state={
            cardInfo:[]
        }
    }
    async componentDidMount(){
      const cardID = this.props.match.params.id
      const url = `https://waterlogged-bland-startup.herokuapp.com/${cardID}`;
      const nocors = `https://cors-anywhere.herokuapp.com/`;
        axios.get( nocors + url)
        .then(response => {
            this.setState({cardInfo:[...this.state.cardInfo, response.data]})
        }).catch(err => console.error(err));
    }
    render(){
        const listC = this.state.cardInfo.map((c) => {
            return (
              <div>
                <Card cardInfo={c} key={uuidv4()} />
              </div>
            );
          });
      
          return (
            <div>
              <h1>CardViewer</h1>
              {listC}
            </div>
          );
    }
}

export default ListCards