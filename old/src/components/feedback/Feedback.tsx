import * as React from 'react';
import Button from '../button/Button';

export default class Feedback extends React.Component {
  render() {
    return (
      <div className="narrow-desktop-grid">
        <div className="spacer-mb-xxlarge">
          <div className="feedback">
            <div className="feedback__box">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-md-6">
                    <div className="feedback__box-text">
                      <span className="text-standard">Hjälpte informationen på den här sidan dig?</span>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="feedback__box-buttons">
                      <div className="feedback__box-buttons--first">
                        <Button type="primary" size="small" text="Ja" display="block" />
                      </div>
                      <div className="feedback__box-buttons--second">
                        <Button type="primary" size="small" text="Nej" display="block" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="spacer-mb-xxlarge">
          <div className="feedback">
            <div className="feedback__box">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <div className="feedback__box-text-only">
                      <span className="text-standard">Tack för din feedback!</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="spacer-mb-xxlarge">
          <div className="feedback">
            <div className="feedback__box">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <div className="feedback__box-text-area">
                      <div className="spacer-mb-xsmall">
                        <span className="text-standard">
                          <strong>Tack, berätta gärna hur vi kan förbättra den här sidan</strong>
                        </span>
                      </div>
                      <div className="form-group">
                        <textarea className="form-control" id="" rows={4} placeholder="Platshållare" />
                      </div>
                      <Button type="primary" size="small" text="Skicka kommentar" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
