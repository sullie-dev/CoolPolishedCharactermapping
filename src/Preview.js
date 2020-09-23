import React, { Component } from 'react'
import Card from './Card'

class Preview extends Component{
    render(){
        return(
           <Card cardId={this.props.match.params.id}/>
        )
    }
}

export default Preview