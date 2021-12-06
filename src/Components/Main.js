import React from 'react';
import NewContent from './New-Content.js';
import {test, sections, mainContent} from './Variables.js'
import Likes from './Likes.js';

class Main extends React.Component{
    constructor(props){
        super(props)
        this.state = {main: this.props.mainContent}
    }
    render(){
        let data = this.state.main.map(principal =><div className="main-container">
                <img src={principal.picUrl} alt="important new" width="410px" height="250px"/>
                <p className="text-main">{principal.title}</p>  
        </div>
        ) 
       return <div className="trendy">
           {data}
           </div>
    }
}
export default Main