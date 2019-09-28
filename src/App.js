import React,{Component} from 'react';
import User from "./components/user.js"
import './App.css';


class App extends Component {
  render(){
  return (
    <div className="App">
      <h4>
        App component
      </h4>
      <User/>
     
    </div>
  );
  }
}

export default App;
