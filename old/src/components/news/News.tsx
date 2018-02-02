import * as React from 'react';

export default class News extends React.Component {

  render() {
    return (
      <div className="">
        <div className="news">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-2 news-header-container">
                <div className="news__header">
                  <div className="news__header-title text-medium">
                    <div className="news__header-title--text">Press och nyheter</div>
                    <hr className="news__header-title--line"/>
                  </div>
                  <div className="news__header-subtitle text-small">
                    En sektion kan ha tillhörande text och innehålla&nbsp;
                    <a href="#" className="text-small">länkar</a>
                  </div>
                </div>
              </div>
              <div className="col news--col-12">
                <ul className="news__list">
                  <li className="news__list-item">
                    <div className="news__list-item--data text-small">
                      23 mars 2017
                    </div>
                    <a href="#" className="news__list-item--link text-medium">
                      17 000 fler nyanlända i <span className="nowrap">grundskolan
                      <i className="icon-arrow"/></span>
                    </a>
                  </li>
                  <li className="news__list-item">
                    <div className="news__list-item--data text-small">
                      23 mars 2017
                    </div>
                    <a href="#" className="news__list-item--link text-medium">
                      Andelen obehöriga lärare <span className="nowrap">ökar
                      <i className="icon-arrow"/></span>
                    </a>
                  </li>
                  <li className="news__list-item">
                    <div className="news__list-item--data text-small">
                      23 mars 2017
                    </div>
                    <a href="#" className="news__list-item--link text-medium">
                      Statlig satsning gav nästan 3000 nyanställda i <span className="nowrap">skolan
                      <i className="icon-arrow"/></span>
                    </a>
                  </li>
                  <li className="news__list-item">
                    <div className="news__list-item--data text-small">
                      23 mars 2017
                    </div>
                    <a href="#" className="news__list-item--link text-medium">
                      Många lärare får höjd lön från flera <span className="nowrap">statsbidrag
                      <i className="icon-arrow"/></span>
                    </a>
                  </li>
                  <li className="news__list-item">
                    <div className="news__list-item--data text-small">
                      23 mars 2017
                    </div>
                    <a href="#" className="news__list-item--link text-medium">
                      Antalet elever i gymnasieskolan ökar för första gången sedan mätningen
                      infördes och sattes i bruk i början av <span className="nowrap">2008
                      <i className="icon-arrow"/></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div >
    );
  }
}
