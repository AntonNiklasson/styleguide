import * as React from 'react';

export interface ButtonParameters {
  text: string;
  size: 'small' | 'medium' | 'large';
}

export default class Button extends React.Component<ButtonParameters, object> {
  render () {
    return (
      <button className={'btn ' + this.props.size}>
        {this.props.text}
      </button>
    );
  }
}
