import * as React from 'react';

export default class ImageArticle extends React.Component {

  render() {
    return (
      <div className="image-article">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-2 image-article-header-container">
              <div className="image-article__header">
                <div className="image-article__header-title text-medium">
                  <div className="image-article__header-title--text">Bildpuffar</div>
                  <hr className="image-article__header-title--line" />
                </div>
                <div className="image-article__header-subtitle text-small">
                  En sektion kan ha tillhörande text och innehålla&nbsp;
                    <a href="#" className="text-small">länkar</a>
                </div>
              </div>
            </div>
            <div className="col image-article--col-12">
              <ul className="image-article__list">
                <li className="image-article__list-item">
                  <div className="row">
                    <div className="col-4 push-8 col-md-12 push-md-0">
                      <img src="../images/image16-9.png" className="image-article__list-item--image" />
                    </div>
                    <div className="col-8 pull-4 col-md-12 pull-md-0">
                      <a href="#" className="image-article__list-item--link text-medium">
                        Fjärdeklassare är bättre på att läsa
                        <i className="icon-arrow" />
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col image-article--col-12">
              <ul className="image-article__list">
                <li className="image-article__list-item">
                  <div className="row">
                    <div className="col-4 push-8 col-md-12 push-md-0">
                      <img src="../images/image16-9.png" className="image-article__list-item--image" />
                    </div>
                    <div className="col-8 pull-4 col-md-12 pull-md-0">
                      <a href="#" className="image-article__list-item--link text-medium">
                        Fortsatt stort intresse för lärarlönelyftet
                        <i className="icon-arrow" />
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col image-article--col-12">
              <ul className="image-article__list">
                <li className="image-article__list-item hide-border-bottom">
                  <div className="row">
                    <div className="col-4 push-8 col-md-12 push-md-0">
                      <img src="../images/image16-9.png" className="image-article__list-item--image" />
                    </div>
                    <div className="col-8 pull-4 col-md-12 pull-md-0">
                      <a href="#" className="image-article__list-item--link text-medium">
                        Nationella prov enbart obligatoriska i högsta kursen
                        <i className="icon-arrow" />
                      </a>
                    </div>
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
