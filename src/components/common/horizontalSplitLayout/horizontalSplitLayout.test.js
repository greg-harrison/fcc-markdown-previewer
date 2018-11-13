import React from 'react';
import ReactDOM from 'react-dom';
import HorizontalSplit from './horizontalSplitLayout';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    (<HorizontalSplit
      leftSide={(<div>Hello Left</div>)}
      rightSide={(<div>Hello Right</div>)}
    />)
    , div);
  ReactDOM.unmountComponentAtNode(div);
});

