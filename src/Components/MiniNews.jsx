import React from 'react';
import ReactDOM from 'react-dom';

import axios from 'axios';

class MiniNews extends React.Component {
    constructor(props) {
        super(props)
        {console.log(props.dataInfo[0])}
    }

    render() {
        let info = this.props.dataInfo[0].map((ind) =>

            <div className='ind_new'>
                <img src={ind.urlToImage} alt="image" width="310px" height="210px" />
                <p>{ind.description}</p>
            </div>
        )
        return <div className="mini_news">{info}</div>
    }
}
export default MiniNews

