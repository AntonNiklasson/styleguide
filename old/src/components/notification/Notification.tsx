import * as React from 'react';
import Button from '../button/Button';

export default class Notification extends React.Component {
  render() {
    return (
      <div>
        <div className="spacer-mb-xlarge">
          <div className="notification notification--success animated">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="notification__flash">
                    <span className="text-standard"><strong>Allt gott!</strong> Lorem ipsum dolor sit amet.</span>
                    <Button type="primary" size="standard" text="Stäng" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="spacer-mb-xlarge">
          <div className="notification notification--warning animated">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="notification__flash">
                    <span className="text-standard"><strong>Varning!</strong> Lorem ipsum dolor sit amet.</span>
                    <Button type="primary" size="standard" text="Stäng" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="spacer-mb-xlarge">
          <div className="notification notification--error animated">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="notification__flash">
                    <span className="text-standard"><strong>Något gick fel!</strong> Lorem ipsum dolor sit amet.</span>
                    <Button type="primary" size="standard" text="Stäng" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="spacer-mb-xxlarge">
          <div className="notification notification--info animated">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="notification__flash">
                    <span className="text-standard"><strong>Information!</strong> Lorem ipsum dolor sit amet.</span>
                    <Button type="primary" size="standard" text="Stäng" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="narrow-desktop-grid spacer-mb-large">
          <div className="notification notification--info bordered">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="notification__textbox">
                    <span className="text-standard">
                      <strong>Uppdaterad kursplan:</strong> Läroplanen har reviderats med skrivningar
                      om digital kompetens (se länk till den nya läroplanen nedan). Under läsåret 2017/2018 är
                      det möjligt att följa den nya eller den gamla läroplanen. Från och med läsåret 2018/2019
                      är det däremot obligatoriskt att följa den nya läroplanen. Den här versionen av läroplanen
                      finns inte längre att köpa, men kan laddas ner som pdf.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="narrow-desktop-grid spacer-mb-large">
          <div className="notification notification--warning bordered">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="notification__textbox">
                    <span className="text-standard">
                      <strong>Ej gällande kursplan:</strong> Läroplanen har reviderats med skrivningar
                      om digital kompetens (se länk till den nya läroplanen nedan). Under läsåret 2017/2018
                      är det möjligt att följa den nya eller den gamla läroplanen. Från och med läsåret 2018/2019
                      är det däremot obligatoriskt att följa visas mer
                    </span>
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
