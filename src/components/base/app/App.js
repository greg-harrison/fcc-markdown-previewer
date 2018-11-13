import React, { Component } from 'react';
import Header from "../header/Header";
import HorizontalSplit from "../../common/horizontalSplitLayout/horizontalSplitLayout";

import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <HorizontalSplit
          className="w-100"
          leftSide={(<div>Hello Left</div>)}
          rightSide={(<div>Hello Right</div>)}
        />
      </div>
    );
  }
}

export default App;
