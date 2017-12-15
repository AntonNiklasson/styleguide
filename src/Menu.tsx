import * as React from 'react';
import { NavLink } from 'react-router-dom';

interface MenuParameters {
  toggleMenu: () => void;
  readonly toggleState: boolean;
}

export default class Menu extends React.Component<MenuParameters> {
  render() {
    let menuState = this.props.toggleState ? 'open' : 'close';
    return (
      <div className={`menu menu--${menuState}`}>
        <div className="menu__header">
          <div className="menu__header-logo"/>
          <div className="menu__header-close text-small" onClick={this.props.toggleMenu}>Stäng</div>
        </div>
        <div className="menu__title text-standard">Komponenter</div>
        <ul className="menu__list">
          <li className="menu__list-item">
            <NavLink
              to="/components/alert"
              activeClassName="active"
              className="menu__list-item--link text-small">
              Alert
              </NavLink>
          </li>
          <li className="menu__list-item">
            <NavLink
              to="/components/block"
              activeClassName="active"
              className="menu__list-item--link text-small">
              Block
              </NavLink>
          </li>
          <li className="menu__list-item">
            <NavLink
              to="/components/navigation"
              activeClassName="active"
              className="menu__list-item--link text-small">
              Huvudmeny
              </NavLink>
          </li>
          <li className="menu__list-item">
            <NavLink
              to="/components/button"
              activeClassName="active"
              className="menu__list-item--link text-small">
              Knappar
              </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}
