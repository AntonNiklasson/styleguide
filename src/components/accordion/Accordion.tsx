import * as React from 'react';

export default class Accordion extends React.Component {

  render() {
    return (
      <div className="accordion">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="accordion__list">
                <div className="accordion__list-item">
                  <a href="#" className="accordion__list-item--link text-medium">
                    Engelska 5, 100 poäng
                  </a>
                  <i className="icon-arrow" />
                </div>
                <div className="accordion__list-item">
                  <a href="#" className="accordion__list-item--link text-medium">
                    Engelska 6, 100 poäng
                  </a>
                  <i className="icon-arrow" />
                </div>
                <div className="accordion__list-item text-standard oppen">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                  dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                  anim id est laborum.
                </div>
                <div className="accordion__list-item">
                  <a href="#" className="accordion__list-item--link text-medium">
                    Vad gör man om proven inte har kommit till skolan en vecka innan provet ska genomföras?
                  </a>
                  <i className="icon-arrow" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
