import React, { Component } from 'react'
import ListCards from './ListCards'

class Dashboard extends Component{
    render(){
        return(
           <ListCards info={this.props.match.params}/>
        )
    }
}
export default Dashboard