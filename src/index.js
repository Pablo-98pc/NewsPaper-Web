import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

import New from './Components/New';
import Header from './Components/Header';
import Main from './Components/Main';
import Selection from './Components/Selection';

import { test, dayNew,  mainContent, sections, elements } from './Components/Variables.js';

import 'bootstrap/dist/css/bootstrap.min.css';
//import images from './assets/imagenes';

class Html extends React.Component {
  constructor(props){
    super(props)
    this.state = {...this.props.test}
  }
  render (){
    return <>
    <Header sections={sections}/>
    <Main dayNew = {dayNew} mainContent={mainContent}/>
    <New test = {test}/>
    <Selection elements={elements}/>
    </>
  }
}

ReactDOM.render(
  <Html/>,
  document.getElementById('root')
);
