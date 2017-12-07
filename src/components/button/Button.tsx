import * as React from 'react';

export interface ButtonParameters {
  text: string;
  size: 'small' | 'standard' | 'large';
}

export default class Button extends React.Component<ButtonParameters, object> {
  render () {
    return (
      <button className={`btn btn--${this.props.size}`}>
        {this.props.text}
      </button>
    );
  }
}
