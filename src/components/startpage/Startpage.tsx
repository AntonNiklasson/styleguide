import * as React from 'react';

export default class Startpage extends React.Component {
  render() {
    return (
      <div className="startpage">
        <div className="startpage__header">
          <div className="startpage__header-bg">
            <img src="../images/bildstartsida.png" alt="" />
          </div>
          <div className="startpage__header-title">
            <div className="container">
              <div className="row">
                <div className="col col-sm-8 col-md-7 col-lg-6">
                  <a href="#" className="startpage__header-title--link">
                    <span>Dags för nationella prov, vi har samlat allt du behöver veta
                      <i className="icon-arrow icon-arrow--white icon-arrow--x1-6" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container startpage__content">
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
