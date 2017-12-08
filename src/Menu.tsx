import * as React from 'react';
import { NavLink } from 'react-router-dom';

export default class Menu extends React.Component {
  render() {
    return (
      <div className="menu">
        <div className="menu__title">Komponenter</div>
        <ul className="menu__list">
          <li className="menu__list-item">
            <NavLink
              to="/components/alert"
              activeClassName="active"
              className="menu__list-item--link">
              Alert
              </NavLink>
          </li>
          <li className="menu__list-item">
            <NavLink
              to="/components/block"
              activeClassName="active"
              className="menu__list-item--link">
              Block
              </NavLink>
          </li>
          <li className="menu__list-item">
            <NavLink
              to="/components/box-selector"
              activeClassName="active"
              className="menu__list-item--link">
              Box Selector
              </NavLink>
          </li>
          <li className="menu__list-item">
            <NavLink
              to="/components/button"
              activeClassName="active"
              className="menu__list-item--link">
              Knappar
              </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}
