import React from 'react';
import New from './New';
import {test} from './Variables.js'

class NewsContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {...this.props.test}
    }
    render(){
        let groupOfNews = this.state.items.map((item)=> <New test={item}/>)
        return <div className="NewsContainer">{groupOfNews}</div>
    }
}
export default NewsContainer