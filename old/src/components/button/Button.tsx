import * as React from 'react';

interface ButtonParameters {
  text: string;
  type: 'primary' | 'secondary';
  size: 'small' | 'standard' | 'standard';
  display?: 'block';
  state?: 'disabled';
}

export default class Button extends React.Component<ButtonParameters> {
  render () {
    return (
      <button className={`btn btn--${this.props.type} btn--${this.props.size}
        ${this.props.state} btn--${this.props.display}`}>
        {this.props.text}
      </button>
    );
  }
}
