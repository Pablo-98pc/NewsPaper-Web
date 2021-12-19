import React from 'react';
import { elements } from './Variables.js'
import MiniNews from './MiniNews.jsx';

import images from '../assets/images'

class Selection extends React.Component {
    constructor(props) {
        super(props)
        this.state = { ...this.props.dataInfo }
    }
    render() {

        return <div className="selection">
            <p>Las noticias del telediario</p>
            <div className="container-miniselection">
                {/* {selectionGroup} */}
                <MiniNews elements={elements} />
            </div>
        </div>
    }
}
export default Selection

/* 
let selectionGroup = this.state.elements.map((element)=><div className="">
                <h2>{element.title}</h2>
                <p>{element.sect1}</p>
                <p>{element.sect2}</p>
                <p>{element.sect3}</p>
                <p>{element.sect4}</p>
                <p>{element.sect5}</p>
            </div>
           ) */ 