import React, { Component } from 'react';
import './style.css';

class MarkdownInput extends Component {
  render() {
    return (
      <React.Fragment>
        <textarea className="MarkdownInput-input"></textarea>
      </React.Fragment>
    );
  }
}

export default MarkdownInput;

