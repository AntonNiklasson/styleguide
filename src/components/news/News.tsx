import * as React from 'react';

export default class News extends React.Component {

  render() {
    return (
      <div className="">
        <div className="news">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-3">
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
              <div className="col-12 col-md-8 offset-md-1">
                <ul className="news__list">
                  <li className="news__list-item">
                    <div className="news__list-item--data text-small">
                      23 mars 2017
                    </div>
                    <a href="#" className="news__list-item--link text-medium">
                      17 000 fler nyanlända i grundskolan
                      <span className="icon--arrow"/>
                    </a>
                  </li>
                  <li className="news__list-item">
                    <div className="news__list-item--data text-small">
                      23 mars 2017
                    </div>
                    <a href="#" className="news__list-item--link text-medium">
                      Andelen obehöriga lärare ökar
                      <span className="icon--arrow"/>
                    </a>
                  </li>
                  <li className="news__list-item">
                    <div className="news__list-item--data text-small">
                      23 mars 2017
                    </div>
                    <a href="#" className="news__list-item--link text-medium">
                      Statlig satsning gav nästan 3000 nyanställda i skolan
                      <span className="icon--arrow"/>
                    </a>
                  </li>
                  <li className="news__list-item">
                    <div className="news__list-item--data text-small">
                      23 mars 2017
                    </div>
                    <a href="#" className="news__list-item--link text-medium">
                      Antalet elever i gymnasieskolan ökar för första gången sedan mätningen
                      infördes och sattes i bruk i början av 2008
                      <span className="icon--arrow"/>
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
