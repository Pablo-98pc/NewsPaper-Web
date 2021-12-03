import React from 'react';
import ReactDOM from 'react-dom';
import NewContent from './New-Content.js';
import {test} from './Variables.js'

class New extends React.Component{
    constructor(props){
        super(props)
        this.state = {...this.props.test}
    }

    render(){
        return <div className="new">
            <div className="info-container">
                <h2>{this.state.title}</h2>
                <h3>{this.state.theme}</h3>
                <NewContent test={test}/>
                <p>{this.state.comments}</p>
            </div>
            <div className="img-container">
                <img src={this.state.picUrl} alt="loading"width="310px" height="210px"></img>
            </div>
           
        </div>
    }
}
export default New