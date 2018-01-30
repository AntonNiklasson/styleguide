import * as React from 'react';

export default class Toc extends React.Component {
  render() {
    return (
      <div className="narrow-desktop-grid">
        <div className="toc">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="toc__box">
                  <div className="toc__box-title text-standard">På denna sida</div>
                  <ul className="toc__list">
                    <li className="toc__list-item">
                      <a href="#" className="toc__list-item--link text-standard">
                        Vad är yrkesprogram och högskoleförberedande program?
                      </a>
                    </li>
                    <li>
                      <ul className="toc__list">
                        <li className="toc__list-subitem">
                          <a href="#" className="text-standard">
                            Yrkesprogram
                          </a>
                        </li>
                        <li className="toc__list-subitem">
                          <a href="#" className="text-standard">
                            Högskoleförberedande program
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="toc__list-item">
                      <a href="#" className="toc__list-item--link text-standard">
                        Introduktionsprogram för dig som inte har tillräckliga betyg
                      </a>
                    </li>
                    <li className="toc__list-item">
                      <a href="#" className="toc__list-item--link text-standard">
                        Kontakta utbildningsförvaltningen
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
