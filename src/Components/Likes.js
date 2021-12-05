import React from 'react';
import {test} from './Variables.js'

class Likes extends React.Component{
    constructor(props) {
        super(props)
        this.state = {countLikes:0,countDislikes:0}
        this.handleDislikes = this.handleDislikes.bind(this);
        this.handleLikes = this.handleLikes.bind(this);
    }
    handleLikes(){
        this.setState({countLikes : this.state.countLikes + 1})
    }
    handleDislikes(){
        this.setState({countDislikes : this.state.countDislikes +1})
    }

    render() {
        let likes = undefined
        let dislikes = undefined
        likes = <div className="likes"><img onClick={this.handleLikes} src="https://cdn-icons.flaticon.com/png/128/880/premium/880605.png?token=exp=1638708700~hmac=e23cb47e03c3de3e92b675ac5cbd46c2"width="20px" height="20px" alt="loading"></img> {this.state.countLikes} likes</div>
        dislikes = <div className="dislikes"><img onClick={this.handleDislikes}  src="https://cdn-icons.flaticon.com/png/128/880/premium/880613.png?token=exp=1638707167~hmac=3e656528011b351adac93c9cd1c5524a" width="20px" height="20px" alt="loading"></img> {this.state.countDislikes} dislikes</div>
        
        return <div className="countOfLikes">{likes} {dislikes}</div>
    }
}
export default Likes