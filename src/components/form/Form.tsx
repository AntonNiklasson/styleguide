import * as React from 'react';

export default class Form extends React.Component {

  render() {
    return (
      <div className="form">
        <div className="container narrow-desktop-grid">
          <div className="row">
            <div className="col">
              <div className="form-group">
                <label className="text-standard" htmlFor="">Textfält / Textfält i fokus</label>
                <input type="text" className="form-control" id="" placeholder="Platshållare" />
              </div>
              <div className="form-group">
                <label className="text-standard margin-reset">Textfält med beskrivning</label>
                <div className="form-group__sublabel text-standard">Beskrivning av textfält</div>
                <input type="text" className="form-control" id="" placeholder="Platshållare" />
              </div>
              <div className="form-group">
                <label className="text-standard">Textfält ej valbar</label>
                <input type="text" className="form-control"
                  id="" placeholder="" readOnly={true} />
              </div>
              <div className="form-group">
                <label className="text-standard">Textfält med validering<span className="text-error">*</span></label>
                <input type="text" className="form-control form-control--error icon-warning"
                  id="" placeholder="" />
                <div className="text-standard text-error">Hjälpsamt felmeddelande</div>
              </div>
            </div>
          </div>
          <div className="row spacer-mt-xlarge">
            <div className="col">
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
                <textarea className="form-control" id="" rows={4} readOnly={true} />
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
          <div className="row spacer-mt-xlarge">
            <div className="col spacer-mb-large">
              <div className="spacer-mb-medium">
                <label className="text-standard" htmlFor="">Enval</label>
                <div className="custom-control custom-radio">
                  <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input" />
                  <label className="custom-control-label" htmlFor="customRadio1">Radio 1</label>
                </div>
                <div className="custom-control custom-radio">
                  <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input" />
                  <label className="custom-control-label" htmlFor="customRadio2">Radio 2</label>
                </div>
                <div className="custom-control custom-radio">
                  <input type="radio" className="custom-control-input" name="disabledRadio"
                    id="disabledRadio" disabled={true} />
                  <label className="custom-control-label" htmlFor="disabledRadio">Ej valbar</label>
                </div>
              </div>
              <div className="spacer-mb-large">
                <label className="text-standard" htmlFor="">Flerval</label>
                <div className="custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="customCheck1" />
                  <label className="custom-control-label" htmlFor="customCheck1">Alternativ</label>
                </div>
                <div className="custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="customCheck2" disabled={true} />
                  <label className="custom-control-label" htmlFor="customCheck2">Ej valbar</label>
                </div>
              </div>
              <div className="form-group">
                <label className="text-standard" htmlFor="">Rullgardin</label>
                <select className="form-control dropdown icon-dropdown-arrow" id="">
                  <option value="1">Platshållare</option>
                </select>
              </div>
              <div className="spacer-mb-xxlarge">
                <div className="form-group">
                  <label className="text-standard" htmlFor="">Rullgardin ej valbar</label>
                  <select className="form-control dropdown icon-dropdown-arrow-disabled"
                    id="" disabled={true}>
                    <option value="1">Platshållare</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label className="text-standard" htmlFor="">Sökfält / textfält med ikon</label>
                <div className="display-flex">
                  <input type="text" className="form-control form-control--search icon-search"
                    id="" placeholder="Platshållare" />
                  <button className="btn btn--primary">Knapp normal</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
