import React from 'react';

import Likes from './Likes.js';

class New extends React.Component{
    constructor(props){
        super(props)
        this.state ={...props.item,nameOfClass:"card"}
        this.handleShow = this.handleShow.bind(this);
        this.handleExtraContent = this.handleExtraContent.bind(this);
    
    }
    
    handleShow(){
        this.setState ({nameOfClass :"card-show"})
    }
    handleExtraContent(){
        
        this.setState(prevState => (
            { readMore: !prevState.readMore }));
           

    }
    
    render(){
return<>
                {this.state.readMore ? <div className='newMax'><div className="img-containermax">
                <img src={this.props.item.urlToImage} alt="loading"width="780" height="420px"></img>
                </div><div className="info-containermax">
                <h2>{this.props.item.title}</h2>
                <h3>{this.props.item.author}</h3>
                <div className="content-max">{this.props.item.content}<a href={this.state.url}>Noticia Completa</a><span onClick={this.handleExtraContent}>LEER MENOS</span></div>
                <Likes /> 
                </div>
                </div> : <div className="new"><div class={this.state.nameOfClass} onMouseLeave={this.handleShow}>
                <div className="card__content">
                <div className="card__front" >
                    <h3 className="card__title">{this.props.item.title}</h3>
                    <p className="card__subtitle">{this.props.item.author}</p>
                </div> 
          
                <div className="card__back">
                <div className="card_body"><div className="info-container">
                    <h2>{this.props.item.title}</h2>
                    <h3>{this.props.item.author}</h3>
                <div className="content">{this.props.item.description} <span onClick={this.handleExtraContent}>LEER MAS</span></div>
                <Likes /> 
                </div>
                <div className="img-container">
                    <img src={this.props.item.urlToImage} alt="loading"width="310px" height="210px"></img>
                </div>
                </div></div></div></div></div>
                }
            </>
    }
}
export default New