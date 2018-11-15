import React from 'react';
import './style.css';

export const ResultOutput = ({ result }) => (
  <div>
    <h3 className="w-100">Markup Output</h3>
    <div className="result-output" dangerouslySetInnerHTML={result}></div>
  </div>
)
