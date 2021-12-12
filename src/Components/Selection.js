import React from 'react';
import {elements} from './Variables.js'
import MiniNews from './MiniNews.jsx';

import images from '../assets/images'

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
          
           <div className="logo-minisection">
                <img src={images[0].img} alt="logo" height='30px' width='30px'/>   
                {selectionGroup}
            </div>
            

           <MiniNews elements={elements}/>
           </div>
    }
}
export default Selection