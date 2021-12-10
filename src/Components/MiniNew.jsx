import React from 'react';
import ReactDOM from 'react-dom';


class MiniNew extends React.Component{
    constructor(props){
        super(props)
        this.state = {elements:this.props.elements}
    }
    render(){
        let info= this.state.elements.map((ind)=><div>
        <img src={ind.pic} alt="image" width="310px" height="210px"/>
        <h3>{ind.description}</h3>
    </div>
   ) 
    return <div className="mini_new">{info}</div>
    }
}
export default MiniNew