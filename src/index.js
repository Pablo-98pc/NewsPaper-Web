import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import New from './Components/New';
import { test } from './Components/Variables.js';


class Html extends React.Component {
  constructor(props){
    super(props)
  }
render (){
  return <><New test = {test}/>
  </>
}
}



ReactDOM.render(
  <Html/>,
  document.getElementById('root')
);
