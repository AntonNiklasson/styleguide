import * as React from 'react';

export default class Form extends React.Component {

  render() {
    return (
      <div className="form">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="narrow-desktop-grid">
                <div className="form-group">
                  <label className="text-standard" htmlFor="">Textfält / Textfält i fokus</label>
                  <input type="text" className="form-control" id="" aria-describedby="" placeholder="Platshållare" />
                </div>
                <div className="form-group">
                  <label className="text-standard margin-reset">Textfält med beskrivning</label>
                  <div className="form-group__sublabel text-standard">Beskrivning av textfält</div>
                  <input type="text" className="form-control" id="" aria-describedby="" placeholder="Platshållare" />
                </div>
                <div className="form-group">
                  <label className="text-standard">Textfält ej valbar</label>
                  <input type="text" className="form-control"
                    id="" aria-describedby="" placeholder="" readOnly />
                </div>
                <div className="form-group">
                  <label className="text-standard">Textfält med validering<span className="text-error">*</span></label>
                  <input type="text" className="form-control form-control--error icon-warning"
                    id="" aria-describedby="" placeholder="" />
                  <div className="text-standard text-error">Hjälpsamt felmeddelande</div>
                </div>
              </div>
            </div>
          </div>
          <div className="row spacer-mt-xlarge">
            <div className="col">
              <div className="narrow-desktop-grid">
                <div className="form-group">
                  <label className="text-standard" htmlFor="">Textområde / Textområde i fokus</label>
                  <textarea className="form-control" id="" rows={4} placeholder="Platshållare" />
                </div>
                <div className="form-group">
                  <label className="text-standard margin-reset">Textområde med beskrivning</label>
                  <div className="form-group__sublabel text-standard">Beskrivning av textområde</div>
                  <textarea className="form-control" id="" rows={4} placeholder="Platshållare" />
                </div>
                <div className="form-group">
                  <label className="text-standard">Textområde  ej valbar</label>
                  <textarea className="form-control" id="" rows={4} readOnly />
                </div>
                <div className="form-group">
                  <label className="text-standard">Textområde med validering<span className="text-error">*</span>
                  </label>
                  <textarea className="form-control form-control--error form-control--error-textarea icon-warning"
                    id="" rows={4} />
                  <div className="text-standard text-error">Hjälpsamt felmeddelande</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
