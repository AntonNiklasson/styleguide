import * as React from 'react';

export default class ImageArticleTwo extends React.Component {

  render() {
    return (
      <div className="">
        <div className="image-article">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6">
                <ul className="image-article__list">
                  <li className="image-article__list-item no-border-bottom">
                    <img src="../images/image16-9.png" className="image-article__list-item--image" />
                    <a href="#" className="image-article__list-item--link text-xlarge margin-text-image-2">
                      Stor satsning på yrkesutbildning - sök statsbidrag senast 2 januari
                      <i className="icon-arrow icon-arrow--lg" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-md-6">
                <ul className="image-article__list">
                  <li className="image-article__list-item no-border-bottom">
                    <img src="../images/image16-9.png" className="image-article__list-item--image" />
                    <a href="#" className="image-article__list-item--link text-xlarge margin-text-image-2">
                      Låg-, mellan-, och högstadium återinförs höstterminen 2018
                      <i className="icon-arrow icon-arrow--lg" />
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
