import React from 'react'
import PropTypes from 'prop-types'
import "./style.css"

export default class HorizontalSplit extends React.Component {
  static propTypes = {
    leftSide: PropTypes.element.isRequired,
    rightSide: PropTypes.element.isRequired,
    className: PropTypes.string
  }

  render() {
    return (
      <div className={`horizontal-split-layout flex-container ${this.props.className}`}>
        <div className={`col-6 left-side`}>{this.props.leftSide}</div>
        <div className={`col-6 right-side`}>{this.props.rightSide}</div>
      </div>
    )
  }
}
