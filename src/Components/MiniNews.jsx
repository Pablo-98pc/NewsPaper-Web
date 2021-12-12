import React from 'react';
import ReactDOM from 'react-dom';


 class MiniNews extends React.Component{
    constructor(props){
        super(props)
        this.state = {elements:this.props.elements}
    }
    render(){
        let info= this.state.elements.map((ind)=>

        <div className='ind_new'>
        <img src={ind.pic} alt="image" width="310px" height="210px"/>
        <p>{ind.description}</p>
    </div>
   ) 
    return <div className="mini_news">{info}</div>
    }
}
export default MiniNews 


