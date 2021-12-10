import React from 'react';
import NewContent from './New-Content.js';
import {test, mainContent, sections, elements} from './Variables.js'
import Likes from './Likes.js';
import MiniNew from './MiniNew.jsx';

class Selection extends React.Component{
    constructor(props){
        super(props)
        this.state = {elements:this.props.elements}
    }

    render(){
        let selectionGroup = this.state.elements.map((element)=><div className="">
            <div className="">
                <h2>{element.title}</h2>
                <p>{element.sect1}</p>
                <p>{element.sect2}</p>
                <p>{element.sect3}</p>
            </div>
            <>
                <MiniNew elements={elements}/>
            </>
            </div>
           ) 
       return <div className="selection">{selectionGroup}</div>
    }
}
export default Selection