import React from 'react';
import { elements } from './Variables.js'
import MiniNews from './MiniNews.jsx';

import images from '../assets/images'

class Selection extends React.Component {
    constructor(props) {
        super(props) ;
        {console.log(this.props.dataInfo[0])}
       
    }

    render() {
        // {console.log(...this.props.dataInfo)}
        return <div className="selection">
            <p>Las noticias más actuales</p>
            <div className="container-miniselection">
                <MiniNews dataInfo={this.props.dataInfo[0]}/>
            </div>
        </div>
    }
}
export default Selection
