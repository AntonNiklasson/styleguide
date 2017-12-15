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
          <div className="header__container-menu text-small" onClick={this.toggleMenu}>Meny</div>
          <Menu menuState={this.state.isOpen} toggleMenu={this.toggleMenu} />
        </div>
      </div>
    );
  }
}
