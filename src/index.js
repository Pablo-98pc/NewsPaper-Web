import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import New from './Components/New';
import NewsContainer from './Components/NewsContainer';
import { test } from './Components/Variables.js';


class Html extends React.Component {
  constructor(props){
    super(props)
    this.state = {...this.props.test}
  }
render (){
  return <><NewsContainer test = {test}/>
  </>
}
}



ReactDOM.render(
  <Html/>,
  document.getElementById('root')
);
