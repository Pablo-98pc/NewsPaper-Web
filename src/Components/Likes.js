import React from 'react';


class Likes extends React.Component{
    constructor(props) {
        super(props)
        this.state = {countLikes:0,countDislikes:0}
        this.handleSumDislikes = this.handleSumDislikes.bind(this);
        this.handleSumLikes = this.handleSumLikes.bind(this);
        this.handleSubtractLikes = this.handleSubtractLikes.bind(this);
        this.handleSumDislikes = this.handleSumDislikes.bind(this);
        this.handleSubtractDislikes = this.handleSubtractDislikes.bind(this)

    }

    handleSumLikes(){
        this.setState({countLikes : this.state.countLikes + 1})
    }
    handleSumDislikes(){
        this.setState({countDislikes : this.state.countDislikes +1})
    }
    handleSubtractLikes() {
        if(this.state.countLikes > 0) {
          this.setState({countLikes : this.state.countLikes -1})  
        }
        
    }
    handleSubtractDislikes() {
        if(this.state.countDislikes > 0) {
            this.setState({countDislikes : this.state.countDislikes -1})
        }
        
    }
    

    render() {
        let likes = undefined
        let dislikes = undefined
        likes = <div className="likes"><img  src="https://cdn-icons.flaticon.com/png/128/880/premium/880605.png?token=exp=1638708700~hmac=e23cb47e03c3de3e92b675ac5cbd46c2"width="20px" height="20px" alt="loading"></img><img onClick={this.handleSumLikes} src="https://cdn-icons-png.flaticon.com/128/626/626075.png"width="20px" height="20px" alt="loading"></img><img onClick={this.handleSubtractLikes} src="https://cdn-icons-png.flaticon.com/128/626/626013.png"width="20px" height="20px" alt="loading"></img> {this.state.countLikes} likes</div>
        dislikes = <div className="dislikes"><img src="https://cdn-icons.flaticon.com/png/128/880/premium/880613.png?token=exp=1638707167~hmac=3e656528011b351adac93c9cd1c5524a" width="20px" height="20px" alt="loading"></img><img onClick={this.handleSumDislikes} src="https://cdn-icons-png.flaticon.com/128/626/626075.png"width="20px" height="20px" alt="loading"></img><img onClick={this.handleSubtractDislikes} src="https://cdn-icons-png.flaticon.com/128/626/626013.png"width="20px" height="20px" alt="loading"></img>  {this.state.countDislikes} dislikes</div>
        
        return <div className="countOfLikes">{likes} {dislikes}</div>
    }
}
export default Likes