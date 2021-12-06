import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

import New from './Components/New';
import Header from './Components/Header';
import Main from './Components/Main';

import { test, mainContent, sections } from './Components/Variables.js';

class Html extends React.Component {
  constructor(props){
    super(props)
    this.state = {...this.props.test}
  }
  render (){
    return <>
    <Header sections={sections}/>
    <Main mainContent={mainContent}/>
    <New test = {test}/>
    </>
  }
}

ReactDOM.render(
  <Html/>,
  document.getElementById('root')
);
