import * as React from 'react';

export default class Substartpage extends React.Component {
  render() {
    return (
      <div className="substartpage">
        <div className="substartpage__header">
          <img className="substartpage__header-img"
            src="../images/understart.png" alt="Error with image loading..." />
          <div className="substartpage__header-section">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="substartpage__header-section--label">
                    Current section
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container substartpage__box">
          <div className="row">
            <div className="col-12 col-md-4 col-lg-3 display-flex">
              <div className="substartpage__box-item">
                <a href="#" className="substartpage__box-item--link">
                  Förskola<i className="icon-arrow" />
                </a>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-3 display-flex">
              <div className="substartpage__box-item">
                <a href="#" className="substartpage__box-item--link">
                  Förskoleklass<i className="icon-arrow" />
                </a>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-3 display-flex">
              <div className="substartpage__box-item">
              <a href="#" className="substartpage__box-item--link">
                Grundskola<i className="icon-arrow" />
              </a>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-3 display-flex">
              <div className="substartpage__box-item">
                <a href="#" className="substartpage__box-item--link">
                  Grundsärskola<i className="icon-arrow" />
                </a>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-3 display-flex">
              <div className="substartpage__box-item">
                <a href="#" className="substartpage__box-item--link">
                  Gymnasieskola<i className="icon-arrow" />
                </a>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-3 display-flex">
              <div className="substartpage__box-item">
                <a href="#" className="substartpage__box-item--link">
                  Gymnasiesärskola<i className="icon-arrow" />
                </a>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-3 display-flex">
              <div className="substartpage__box-item no-border">
                <a href="#" className="substartpage__box-item--link">
                  Inspiration och stöd i arbetet<i className="icon-arrow" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container substartpage__content">
          <div className="row">
            <div className="col">
              Page content here...
            </div>
          </div>
        </div>
      </div>
    );
  }
}
