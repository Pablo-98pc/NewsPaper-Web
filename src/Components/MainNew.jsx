import React, { useState, useEffect } from 'react';
import { test, sections, dayNew, descriptionNew, mainContent } from './Variables.js'
import axios from 'axios';

class MainNew extends React.Component {
    
    constructor(props) {
        super(props) ;
        
    }
    
    render() {
        return <>
       
        <div className='super'>         
            {
                this.props.dataInfo.map(item => <div className="super-container">
                    <p className="text-day">{item[16].title}</p>
                    {/* {console.log(item)} */}
                    <img src={item[16].urlToImage} alt="day new" width="350px" height="200px" />
                </div>
                )}

        </div>
        </>
        
    }
}

export default MainNew



/*const apiUrl = `https://newsapi.org/v2/everything?q=tesla&from=2021-11-18&sortBy=publishedAt&apiKey=1e9c9342568842769209278c3e668c01` ;

 useEffect(()=>{
      const consultAPI = async () => {
        const res = await axios.get(apiUrl);
        const data = res.data;
        const info = data.articles;
        const new0 = info[17];
        const new1 = info[18];
        const new2 = info[19];
        const information = [new0, new1, new2]
        {console.log(information)}
        setNews(information)       
}
consultAPI() 

}) */