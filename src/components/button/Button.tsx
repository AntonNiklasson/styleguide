import * as React from 'react';

interface ButtonParameters {
  text: string;
  size: 'small' | 'standard' | 'large';
}

export default class Button extends React.Component<ButtonParameters> {
  render () {
    return (
      <button className={`btn btn--${this.props.size}`}>
        {this.props.text}
      </button>
    );
  }
}
