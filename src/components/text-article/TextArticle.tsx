import * as React from 'react';

export default class TextArticle extends React.Component {

  render() {
    return (
      <div className="text-article">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-2 text-article-header-container">
              <div className="text-article__header">
                <div className="text-article__header-title text-medium">
                  <div className="text-article__header-title--text">Innehållsnavigering</div>
                  <hr className="text-article__header-title--line" />
                </div>
                <div className="text-article__header-subtitle text-small">
                  En sektion kan ha tillhörande text och innehålla&nbsp;
                    <a href="#" className="text-small">länkar</a>
                </div>
              </div>
            </div>
            <div className="col text-article--col-12">
              <ul className="text-article__list">
                <li className="text-article__list-item">
                  <a href="#" className="text-article__list-item--link text-medium">
                    Anpassa för läs- och <span className="nowrap">skrivsvårigheter
                      <i className="icon-arrow" /></span>
                  </a>
                  <div className="text-article__list-item--text text-standard">
                    Skolverket erbjuder stöd till huvudmän, skolor och förskolor
                      för att de ska kunna förbättra undervisningen.
                    </div>
                </li>
              </ul>
            </div>
            <div className="col text-article--col-12">
              <ul className="text-article__list">
                <li className="text-article__list-item">
                  <a href="#" className="text-article__list-item--link text-medium">
                    Nationella prov med digitala <span className="nowrap">verktyg
                      <i className="icon-arrow" /></span>
                  </a>
                  <div className="text-article__list-item--text text-standard">
                    Tillsammans med 25 ungdomar har vi identifierat nio vanliga myter
                      om gymnasieskolan. Här bemöter vi dem med fakta.
                    </div>
                </li>
              </ul>
            </div>
            <div className="col text-article--col-12">
              <ul className="text-article__list">
                <li className="text-article__list-item">
                  <a href="#" className="text-article__list-item--link text-medium">
                    Nationella prov med digitala <span className="nowrap">verktyg
                      <i className="icon-arrow" /></span>
                  </a>
                  <div className="text-article__list-item--text text-standard">
                    På vår lärportal finns material speciellt anpassat för
                      att utveckla undervisningen tillsammans med kollegor.
                    </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
