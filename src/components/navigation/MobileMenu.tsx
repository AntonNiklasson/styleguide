import * as React from 'react';

interface MobileMenuParameters {
  toggleMenu: () => void;
  readonly menuState: boolean;
}

export default class MobileMenu extends React.Component<MobileMenuParameters> {
  render() {
    let menuState = this.props.menuState ? '' : 'hidden';
    return (
      <div className={`full-height ${menuState}`}>
        <div className="mobile-menu mobile-menu__header">
          <div className="mobile-menu__container">
            <h1 className="h1 mobile-menu__header-title">Meny</h1>
            <a href="#" className="mobile-menu__list-item--close text-small" onClick={this.props.toggleMenu}>
              Stäng
            </a>
          </div>
        </div>
        <div className="mobile-menu mobile-menu__links">
          <div className="mobile-menu__container align-items-start">
            <ul className="mobile-menu__list">
              <li className="mobile-menu__list-item">
                <a href="#" className="mobile-menu__list-item--link text-medium">
                  Undervisning
                  <span className="icon--arrow"/>
                </a>
              </li>
              <li className="mobile-menu__list-item">
                <a href="#" className="mobile-menu__list-item--link text-medium">
                  Skolutveckling
                  <span className="icon--arrow"/>
                </a>
              </li>
              <li className="mobile-menu__list-item">
                <a href="#" className="mobile-menu__list-item--link text-medium">
                  Lagar och regler
                  <span className="icon--arrow"/>
                </a>
              </li>
              <li className="mobile-menu__list-item">
                <a href="#" className="mobile-menu__list-item--link text-medium">
                  Innehåll A-Ö
                  <span className="icon--arrow"/>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
