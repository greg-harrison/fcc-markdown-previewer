import React, { Component } from 'react';
import './style.css';

class MarkdownInput extends Component {
  render() {
    let { onChange } = this.props;
    return (
      <div>
        <h3 className="w-100">Markdown Input</h3>
        <textarea className="MarkdownInput-input" onChange={(e) => onChange(e.target.value)}></textarea>
      </div>
    );
  }
}

export default MarkdownInput;

