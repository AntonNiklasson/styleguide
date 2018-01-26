import * as React from 'react';

interface MobileMenuParameters {
  toggleMenu: () => void;
  readonly menuState: boolean;
}

export default class MobileMenu extends React.Component<MobileMenuParameters> {
  render() {
    let menuState = this.props.menuState ? '' : 'hidden';
    return (
      <div className={`${menuState}`}>
        <div className="mobile-menu mobile-menu__header">
          <div className="mobile-menu__container">
            <h1 className="h1 mobile-menu__header-title">Meny</h1>
            <a href="#" className="icon-close text-small" onClick={this.props.toggleMenu}>
              Stäng
            </a>
          </div>
        </div>
        <div className="mobile-menu mobile-menu__links">
          <div className="mobile-menu__container">
            <ul className="mobile-menu__list">
              <li className="mobile-menu__list-item">
                <a href="#" className="mobile-menu__list-item--link text-medium">
                  Undervisning
                  <i className="icon-arrow"/>
                </a>
              </li>
              <li className="mobile-menu__list-item">
                <a href="#" className="mobile-menu__list-item--link text-medium">
                  Skolutveckling
                  <i className="icon-arrow"/>
                </a>
              </li>
              <li className="mobile-menu__list-item">
                <a href="#" className="mobile-menu__list-item--link text-medium">
                  Lagar och regler
                  <i className="icon-arrow"/>
                </a>
              </li>
              <li className="mobile-menu__list-item">
                <a href="#" className="mobile-menu__list-item--link text-medium">
                  Innehåll A-Ö
                  <i className="icon-arrow"/>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
