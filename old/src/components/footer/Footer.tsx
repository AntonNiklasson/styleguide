import * as React from 'react';

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-5">
              <div className="footer__header-container">
                <div className="footer__logo" />
                <div className="footer__description text-medium">
                  Skolverket arbetar för att alla barn, ungdomar och vuxna ska få en utbildning av god kvalitet.
              </div>
              </div>
            </div>
            <div className="col-12 col-lg-7">
              <div className="footer__links-container">
                <ul className="footer__list">
                  <li className="footer__list-item">
                    <a href="#" className="footer__list-item--link text-medium">
                      <span className="nowrap">Kontakt<i className="icon-arrow icon-arrow--white"/></span>
                    </a>
                  </li>
                  <li className="footer__list-item">
                    <a href="#" className="footer__list-item--link text-medium">
                      Om <span className="nowrap">Skolverket<i className="icon-arrow icon-arrow--white"/></span>
                    </a>
                  </li>
                  <li className="footer__list-item">
                    <a href="#" className="footer__list-item--link text-medium">
                      Våra <span className="nowrap">webbplatser<i className="icon-arrow icon-arrow--white"/></span>
                    </a>
                  </li>
                  <li className="footer__list-item">
                    <a href="#" className="footer__list-item--link text-medium">
                      <span className="nowrap">Press<i className="icon-arrow icon-arrow--white"/></span>
                    </a>
                  </li>
                </ul>
                <ul className="footer__list">
                  <li className="footer__list-item no-border-bottom">
                    <a href="#" className="footer__list-item--link purple">
                      Om webbplatsen
                    </a>
                  </li>
                  <li className="footer__list-item no-border-bottom">
                    <a href="#" className="footer__list-item--link purple">
                      Kakor
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
