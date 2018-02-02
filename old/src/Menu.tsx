import * as React from 'react';
import { NavLink } from 'react-router-dom';

interface MenuParameters {
  toggleMenu: () => void;
  readonly menuState: boolean;
}

export default class Menu extends React.Component<MenuParameters> {
  render() {
    let menuState = this.props.menuState ? 'open' : 'close';
    return (
      <div className={`menu menu--${menuState}`}>
        <div className="menu__header">
          <div className="menu__header-logo" />
          <div className="menu__header-close text-small" onClick={this.props.toggleMenu}>Stäng</div>
        </div>
        <div className="menu__title text-standard">Komponenter</div>
        <ul className="menu__list">
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
              to="/components/news"
              activeClassName="active"
              className="menu__list-item--link text-small">
              Nyhetslista
            </NavLink>
          </li>
          <li className="menu__list-item">
            <NavLink
              to="/components/content-navigation"
              activeClassName="active"
              className="menu__list-item--link text-small">
              Innehållsnavigering
              </NavLink>
          </li>
          <li className="menu__list-item">
            <NavLink
              to="/components/text-article"
              activeClassName="active"
              className="menu__list-item--link text-small">
              Textpuffar
            </NavLink>
          </li>
          <li className="menu__list-item">
            <NavLink
              to="/components/image-article"
              activeClassName="active"
              className="menu__list-item--link text-small">
              Bildpuffar
            </NavLink>
          </li>
          <li className="menu__list-item">
            <NavLink
              to="/components/image-article-two"
              activeClassName="active"
              className="menu__list-item--link text-small">
              Bildpuffar 2
            </NavLink>
          </li>
          <li className="menu__list-item">
            <NavLink
              to="/components/form"
              activeClassName="active"
              className="menu__list-item--link text-small">
              Formulär
            </NavLink>
          </li>
          <li className="menu__list-item">
            <NavLink
              to="/components/footer"
              activeClassName="active"
              className="menu__list-item--link text-small">
              Sidfot
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
          <li className="menu__list-item">
            <NavLink
              to="/components/feedback"
              activeClassName="active"
              className="menu__list-item--link text-small">
              Feedback
            </NavLink>
          </li>
          <li className="menu__list-item">
            <NavLink
              to="/components/toc"
              activeClassName="active"
              className="menu__list-item--link text-small">
              Table of content
            </NavLink>
          </li>
          <li className="menu__list-item">
            <NavLink
              to="/components/startpage"
              activeClassName="active"
              className="menu__list-item--link text-small">
              Startsida
            </NavLink>
          </li>
          <li className="menu__list-item">
            <NavLink
              to="/components/substartpage"
              activeClassName="active"
              className="menu__list-item--link text-small">
              Understartsida
            </NavLink>
          </li>
          <li className="menu__list-item">
            <NavLink
              to="/components/notification"
              activeClassName="active"
              className="menu__list-item--link text-small">
              Notifieringar
            </NavLink>
          </li>
          <li className="menu__list-item">
            <NavLink
              to="/components/accordion"
              activeClassName="active"
              className="menu__list-item--link text-small">
              Accordion
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}
