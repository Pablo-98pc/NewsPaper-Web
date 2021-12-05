import React from 'react';
import NewContent from './New-Content.js';
import {test} from './Variables.js'
import Likes from './Likes.js';

class New extends React.Component{
    constructor(props){
        super(props)
        this.state = {items:this.props.test}
    }

    render(){
        let groupOfNews = this.state.items.map((item)=><div className="new">
            <div className="info-container">
                <h2>{item.title}</h2>
                <h3>{item.theme}</h3>
                <NewContent test={item}/>
                <Likes />
            </div>
            <div className="img-container">
                <img src={item.picUrl} alt="loading"width="310px" height="210px"></img>
            </div> 
            </div>
           ) 
       return <div className="NewsContainer">{groupOfNews}</div>
    }
}
export default New