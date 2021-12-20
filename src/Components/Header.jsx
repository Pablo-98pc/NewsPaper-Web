import React from 'react';
import NewContent from './New-Content.js';
import { test, sections, mainContent } from './Variables.js'
import Likes from './Likes.js';
import images from '../assets/images'
import axios from 'axios';

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = { nav: this.props.sections, keyword: props.keyword}
    }
    render() {
        
        function handleSearch (event){
            this.setState(() => ({ keyword: this.state.keyword }));
          
            if(event.charCode == 13) {
                this.props.keyword.onChange(event.target.value);
            }
            
        }
        console.log(this.state.keyword)

        let logo = <div className="header-top">
            <img src={images[0].img} alt="logo" height='100px' width='100px' />
            <p>NEWS</p>
        </div>

        let search = <input type='text' placeholder = 'search news' className="search" onKeyPress={handleSearch} ></input>
        let socialMedia = <div className="socialMedia">
            <div className="tiktok">
                <img src={images[2].img} alt="tiktok" height='40px' width='40px' />
            </div>
            <div className="instagram">
                <img src={images[3].img} alt="instagram" height='40px' width='40px' />
            </div>
            <div className="youtube">
                <img src={images[4].img} alt="youtube" height='40px' width='40px' />
            </div>
            <div className="twitter">
                <img src={images[5].img} alt="twitter" height='40px' width='40px' />
            </div>
        </div>
        let navbar = this.state.nav.map(ind => <div className="ind-section">
            <button type="button" class={ind.class}>{ind.title}</button>
        </div>
        )
        return (<div className="header">
            
            {logo }
            <div className="sections">
                {search}
                {navbar}
                {socialMedia}
            </div>
        </div>)
    }
}
export default Header