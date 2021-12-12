import React from 'react';
import {elements} from './Variables.js'
import MiniNews from './MiniNews.jsx';

class Selection extends React.Component{
    constructor(props){
        super(props)
        this.state = {elements:this.props.elements}
    }
    render(){
        let selectionGroup = this.state.elements.map((element)=><div className="">
                <h2>{element.title}</h2>
                <p>{element.sect1}</p>
                <p>{element.sect2}</p>
                <p>{element.sect3}</p>
                <p>{element.sect4}</p>
                <p>{element.sect5}</p>
            </div>
           ) 
       return <div className="selection">
           {selectionGroup}
           <MiniNews elements={elements}/>
           </div>
    }
}
export default Selection