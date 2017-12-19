import * as React from 'react';
import MobileMenu from './MobileMenu';

interface NavigationState {
  readonly isOpen: boolean;
}

export default class Navigation extends React.Component<object, NavigationState> {
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
    let mobileMenuState = this.state.isOpen ? 'hidden' : '';
    return (
      <div className="full-height">
        <MobileMenu menuState={this.state.isOpen} toggleMenu={this.toggleMenu} />
        <div className={`full-height ${mobileMenuState}`}>
          <div className="navigation navigation__header">
            <div className="nav-container nav-container--header">
              <div className="navigation__header-logo"/>
              <ul className="navigation__list">
                <li className="navigation__list-item">
                  <a href="#" className="navigation__list-item--speaker text-small">
                    Lyssna
                </a>
                </li>
                <li className="navigation__list-item">
                  <a href="#" className="navigation__list-item--language text-small">
                    Languages
                </a>
                </li>
                <li className="navigation__list-item">
                  <a href="#" className="navigation__list-item--search text-small">
                    Sök
                </a>
                </li>
                <li className="navigation__list-item">
                  <a href="#" className="navigation__list-item--mobilemenu text-small" onClick={this.toggleMenu}>
                    Meny
                </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="navigation navigation__links">
            <div className="nav-container nav-container--links">
              <ul className="navigation__list navigation__list--absolute">
                <li className="navigation__list-item">
                  <a href="#" className="navigation__list-item--link text-medium">
                    Undervisning
                </a>
                </li>
                <li className="navigation__list-item">
                  <a href="#" className="navigation__list-item--link text-medium">
                    Skolutveckling
                </a>
                </li>
                <li className="navigation__list-item">
                  <a href="#" className="navigation__list-item--link text-medium">
                    Lagar och regler
                </a>
                </li>
                <li className="navigation__list-item">
                  <a href="#" className="navigation__list-item--link text-standard">
                    Innehåll A-Ö
                </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
