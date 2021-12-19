import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import NewContent from './New-Content.js';
import { test } from './Variables.js'
import Likes from './Likes.js';

import axios from 'axios';

class News extends React.Component {
    constructor(props) {
        super(props);
    }
            
    render() {
        let i = 1
        let groupOfNews = this.props.dataInfo[0].map (item => { return <div key={i++}className="new"> 
       
        <div className="info-container">
            <h2>{item.title}</h2>
            <p > {item.description}</p>
            <NewContent test={item} />
            <Likes />
        </div>
        <div className="img-container">
            <img  src={item.urlToImage} alt="loading" width="310px" height="210px" />
        </div>
        </div>
        }
        )
        return <>{groupOfNews}</>
    }
}
export default News