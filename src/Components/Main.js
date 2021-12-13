import React from 'react';
import NewContent from './New-Content.js';
import {test, sections, dayNew, mainContent} from './Variables.js'
import Likes from './Likes.js';

class Main extends React.Component{
    constructor(props){
        super(props)
        this.state = {main: this.props.mainContent, dayNew: this.props.dayNew }
    }

    render(){
        let data = this.state.main.map(principal =><div className="main"><div className="main-container">
                <img src={principal.picUrl} alt="important new" width="410px" height="250px"/></div>
                <div>
                <p className="text-main">{principal.title}</p>  
        </div>
        </div>
        ) 

        let dayNew = this.state.dayNew.map(day =><div className="super-container">
            <p className="text-day">{day.title}</p>  
        <img src={day.picUrl} alt="day new" width="810px" height="500px"/>
        
        </div>
        )
       return <div className="trendy">
           {dayNew}
           <div className='row-container'>
           {data}
           </div>
           
        
           </div>
    }
    
}
export default Main