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
        let logo = <div className="header-top"><img src={this.state.nav[0].picLogo} alt="logo"width="310px" height="210px"/></div>
        let search = <div className="search"><img src={this.state.nav[1].picSearch} alt="search" width="50px" height="50px"/></div>
        let socialMedia = <div className="socialMedia">
            <img src={this.state.nav[2].picTiktok} alt="Tiktok" width="50px" height="50px"/>
            <img src={this.state.nav[3].picInstagram} alt="Instagram" width="50px" height="50px"/>
            <img src={this.state.nav[4].picYoutube} alt="Youtube" width="50px" height="50px"/>
            <img src={this.state.nav[5].picTwitter} alt="Twitter" width="50px" height="50px"/>
        </div>
        let navbar = this.state.nav.map(ind =><div className="ind-section">
                <button type="button" class={ind.class}>{ind.title}</button>
        </div>
        ) 
       return <div className="header">
           {logo}
           <div className="sections">
           {search}   
           {navbar}
           {socialMedia}
           </div>
        </div>
    }
}
export default Header