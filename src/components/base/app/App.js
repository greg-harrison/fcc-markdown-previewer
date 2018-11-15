import React, { Component } from 'react';
import Header from "../header/Header";
import HorizontalSplit from "../../common/horizontalSplitLayout/horizontalSplitLayout";
import { parse } from "markdown";
import MarkdownInput from "../../MarkdownInput/MarkdownInput";
import { ResultOutput } from "../../ResultOutput/ResultOutput";

import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css';

class App extends Component {
  state = {
    value: ""
  }

  changeValue = (input) => {
    this.setState({
      value: parse(input)
    })
  }

  convertToMarkup = (input) => {
    return { __html: input }
  }

  render() {
    let { value } = this.state;
    let markup = this.convertToMarkup(value);

    return (
      <div className="App">
        <Header />
        <HorizontalSplit
          className="w-100 App-MainSection"
          leftSide={(<MarkdownInput onChange={this.changeValue} />)}
          rightSide={(<ResultOutput result={markup} />)}
        />
      </div>
    );
  }
}

export default App;
