import React from 'react';
import NewContent from './New-Content.js';
import {test, sections, dayNew, descriptionNew,  mainContent} from './Variables.js'
import Likes from './Likes.js';

class Main extends React.Component{
    constructor(props){
        super(props)
        this.state = {main: this.props.mainContent, descriptionNew:this.props.descriptionNew, dayNew: this.props.dayNew, visible: this.props.visible }
        this.display = this.display.bind(this)
    }
  
    display() {
      this.setState(() => ({ visible: !this.state.visible}))
    }

    render(){

        let bigImage = this.state.dayNew.map(day =><div className="super-container">
            <p className="text-day">{day.title}</p>  
            <img src={day.picUrl} alt="day new" width="810px" height="530px"/>
        </div>
        )

        let descriptionNew = this.state.descriptionNew.map(descript =><div className="description-container">
            <p className="text-day">{descript.title}</p>  
            <img src={descript.picUrl} alt="day new" width="300px" height="200px"/>
            <p className="long-description">{descript.longDescription}</p> 
        </div>
        )


        let threeNews = this.state.main.map(principal =><div className="main">
        <div className="main-container">
            <img src={principal.picUrl} alt="important new" width="410px" height="250px"/>
        </div>
        <div>
            <p className="text-main">{principal.title}</p>  
        </div>
        </div>
        ) 

        return <div className="trendy">
           <div >
            {this.state.visible ?
               <div onClick={this.display} className='big-container'>
               {bigImage}
               <div className='row-container'>{threeNews}</div>
               </div>
               :
               <div onClick={this.display} className='big-container'>
               {descriptionNew}
               <div className='row-container'>{threeNews}</div>  
               </div>
            }
            </div> 
        </div> 
    }
 
    
}
export default Main