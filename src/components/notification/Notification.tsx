import * as React from 'react';

interface NotificationState {
  readonly close: boolean;
}

export default class Notification extends React.Component<object, NotificationState>  {
  constructor(props: object) {
    super(props);

    this.state = {
      close: false,
    };

    this.close = this.close.bind(this);
  }

  close() {
    this.setState({ close: true });
  }

  render() {
    let closeState = this.state.close ? 'close' : '';
    return (
      <div>
        <div className="spacer-mb-xlarge">
          <div className={`notification notification--success animated ${closeState}`}>
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="notification__flash">
                    <span className="text-standard"><strong>Allt gott!</strong> Lorem ipsum dolor sit amet.</span>
                    <button className="btn btn--primary"
                      onClick={this.close}>Stäng</button>
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
                    <button className="btn btn--primary">Stäng</button>
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
                    <button className="btn btn--primary">Stäng</button>
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
                    <button className="btn btn--primary">Stäng</button>
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
