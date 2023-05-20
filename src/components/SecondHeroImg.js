import './SecondHeroImg.css'
import React from 'react'
import {Component} from "react";

class SecondHeroImg  extends Component{
    render(){
        return (
            <div className="heroimgTwo">
               <div className="heading">
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                </div>
            </div>
        )
    }
}

export default SecondHeroImg
