import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import News from './Components/News';




class Html extends React.Component {
  constructor(props){
    super(props)
    this.state = {items:[]}
  }


render (){
  return <><News/>
  </>
}
}



ReactDOM.render(
  <Html/>,
  document.getElementById('root')
);
