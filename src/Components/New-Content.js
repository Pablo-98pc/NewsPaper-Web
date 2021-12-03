import React from 'react';
import ReactDOM from 'react-dom';
import {test} from './Variables.js'

class NewContent extends React.Component{
    constructor(props){
        super(props)
        this.state = {...this.props.test}
        this.handleExtraContent = this.handleExtraContent.bind(this);
    }
    handleExtraContent(){
        this.setState(prevState => (
            { readMore: !prevState.readMore }));
    }
    render(){
        let status = undefined
        if(!this.state.readMore) {
            status = <div className="content">{this.state.initialContent} <span onClick={this.handleExtraContent}>LEER MAS</span></div>
        }
        else {
            status = <div className="content">{this.state.fullContent} <span onClick={this.handleExtraContent}>LEER MENOS</span></div>
        }
        return status
    }
}
export default NewContent 