import * as React from 'react';
import Menu from './Menu';

interface HeaderState {
  readonly isOpen: boolean;
}

export default class Header extends React.Component<object, HeaderState> {
  constructor(props: object) {
    super(props);

    this.state = {
      isOpen: false,
    };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <div className="header">
        <div className="header__container">
          <div className="header__container-logo" />
          <div className="header__container-menu" onClick={this.toggleMenu}>Meny</div>
          {this.state.isOpen && <Menu toggleState={this.toggleMenu} />}
        </div>
      </div>
    );
  }
}
