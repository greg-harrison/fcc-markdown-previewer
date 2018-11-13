import React, { Component } from 'react';
import Header from "../header/Header";
import HorizontalSplit from "../../common/horizontalSplitLayout/horizontalSplitLayout";
import MarkdownInput from "../../MarkdownInput/MarkdownInput";
import ResultOutput from "../../ResultOutput/ResultOutput";

import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <HorizontalSplit
          className="w-100 App-MainSection"
          leftSide={(<MarkdownInput />)}
          rightSide={(<ResultOutput />)}
        />
      </div>
    );
  }
}

export default App;
