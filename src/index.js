import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import News from './Components/News';
import Header from './Components/Header';
import MainNew from './Components/MainNew';
import Selection from './Components/Selection';

import axios from 'axios';

import {sections} from './Components/Variables.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import { render } from '@testing-library/react';
//import images from './assets/imagenes';

let dataInfo = [];

class Html extends React.Component {
  constructor(props){
    super(props)
    this.state = {...this.props.test} 
  }
 
  async getNews() {
    const apiKey = '0c147757b76349328742298998d0d285';
    const url = 'https://newsapi.org/v2/everything?q=tesla&from=2021-11-18&sortBy=publishedAt&apiKey=';
    const resp = await axios.get(url + apiKey);
    let data = resp.data.articles;
    // {console.log(dataInfo)}
    return data; 
   }
   
   async componentDidMount() {
   let dataOfNews = await this.getNews(); 
   dataInfo.push(dataOfNews); 
   
 }

  render (){
    
    return <>
    
    <Header sections={sections}/>
    <MainNew dataInfo={dataInfo} visible = {true}/>
    <News dataInfo={dataInfo}/>
    <Selection dataInfo={dataInfo}/>
    </>
  }
  
}

ReactDOM.render(
  <Html/>,
  document.getElementById('root')
);
