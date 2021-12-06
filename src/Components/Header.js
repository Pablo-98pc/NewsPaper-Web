import React from 'react';
import NewContent from './New-Content.js';
import {test, sections, mainContent} from './Variables.js'
import Likes from './Likes.js';

class Header extends React.Component{
    constructor(props){
        super(props)
        this.state = {nav:this.props.sections}
    }

    render(){
        let logo = <div className="header-top"><img src={this.state.nav.picLogo} alt="logo"width="310px" height="210px"/></div>
        let navbar = this.state.nav.map(ind =><div className="ind-section">
                <p>{ind.title}</p>
        </div>
        ) 
       return <div className="header">
           {logo}
           <div className="sections">
           {navbar}
           </div>
        </div>
    }
}
export default Header