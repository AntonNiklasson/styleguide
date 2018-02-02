import * as React from 'react';
// import Button from '../components/button/Button';

export default class ButtonPage extends React.Component {
  render() {
    return (
      <div className="button-page">
        <div className="container narrow-desktop-grid">
          <div className="row spacer-mb-large">
            <div className="col spacer-mb-medium">
              <div className="text-standard spacer-mb-small"><strong>Primary</strong></div>
              <button className="btn btn--primary btn--standard">Knapp normal</button>
              {/* <Button type="primary" size="standard" text="Knapp normal" /> */}
            </div>
            <div className="col spacer-mb-medium">
              <div className="text-standard spacer-mb-small"><strong>Hover</strong></div>
              <button className="btn btn--primary btn--standard">Knapp normal</button>
              {/* <Button type="primary" size="standard" text="Knapp normal" /> */}
            </div>
            <div className="col spacer-mb-medium">
              <div className="text-standard spacer-mb-small"><strong>Active/focus</strong></div>
              <button className="btn btn--primary btn--standard">Knapp normal</button>
              {/* <Button type="primary" size="standard" text="Knapp normal" /> */}
            </div>
            <div className="col spacer-mb-medium">
              <div className="text-standard spacer-mb-small"><strong>Disabled</strong></div>
              <button className="btn btn--primary btn--standard disabled">Knapp normal</button>
              {/* <Button type="primary" size="standard" text="Knapp normal" state="disabled" /> */}
            </div>
          </div>
          <div className="row spacer-mb-large">
            <div className="col spacer-mb-medium">
              <button className="btn btn--primary btn--small">Knapp liten</button>
              {/* <Button type="primary" size="small" text="Knapp liten" /> */}
            </div>
            <div className="col spacer-mb-medium">
              <button className="btn btn--primary btn--small">Knapp liten</button>
              {/* <Button type="primary" size="small" text="Knapp liten" /> */}
            </div>
            <div className="col spacer-mb-medium">
              <button className="btn btn--primary btn--small">Knapp liten</button>
              {/* <Button type="primary" size="small" text="Knapp liten" /> */}
            </div>
            <div className="col spacer-mb-medium">
              <button className="btn btn--primary btn--small disabled">Knapp liten</button>
              {/* <Button type="primary" size="small" text="Knapp liten" state="disabled" /> */}
            </div>
          </div>
          <div className="row spacer-mb-xxlarge">
            <div className="col spacer-mb-medium">
              <button className="btn btn--primary btn--standard btn--block">Knapp full</button>
              {/* <Button type="primary" size="standard" text="Knapp full" display="block" /> */}
            </div>
          </div>
          <div className="row spacer-mb-large">
            <div className="col spacer-mb-medium">
              <div className="text-standard spacer-mb-small"><strong>Secondary</strong></div>
              <button className="btn btn--secondary btn--standard">Knapp normal</button>
              {/* <Button type="secondary" size="standard" text="Knapp normal" /> */}
            </div>
            <div className="col spacer-mb-medium">
              <div className="text-standard spacer-mb-small"><strong>Hover</strong></div>
              <button className="btn btn--secondary btn--standard">Knapp normal</button>
              {/* <Button type="secondary" size="standard" text="Knapp normal" /> */}
            </div>
            <div className="col spacer-mb-medium">
              <div className="text-standard spacer-mb-small"><strong>Active/focus</strong></div>
              <button className="btn btn--secondary btn--standard">Knapp normal</button>
              {/* <Button type="secondary" size="standard" text="Knapp normal" /> */}
            </div>
            <div className="col spacer-mb-medium">
              <div className="text-standard spacer-mb-small"><strong>Disabled</strong></div>
              <button className="btn btn--secondary btn--standard disabled">Knapp normal</button>
              {/* <Button type="secondary" size="standard" text="Knapp normal" state="disabled" /> */}
            </div>
          </div>
          <div className="row spacer-mb-large">
            <div className="col spacer-mb-medium">
              <button className="btn btn--secondary btn--small">Knapp liten</button>
              {/* <Button type="secondary" size="small" text="Knapp liten" /> */}
            </div>
            <div className="col spacer-mb-medium">
              <button className="btn btn--secondary btn--small">Knapp liten</button>
              {/* <Button type="secondary" size="small" text="Knapp liten" /> */}
            </div>
            <div className="col spacer-mb-medium">
              <button className="btn btn--secondary btn--small">Knapp liten</button>
              {/* <Button type="secondary" size="small" text="Knapp liten" /> */}
            </div>
            <div className="col spacer-mb-medium">
              <button className="btn btn--secondary btn--small disabled">Knapp liten</button>
              {/* <Button type="secondary" size="small" text="Knapp liten" state="disabled" /> */}
            </div>
          </div>
          <div className="row spacer-mb-xxlarge">
            <div className="col spacer-mb-medium">
              <button className="btn btn--secondary btn--standard btn--block">Knapp full</button>
              {/* <Button type="secondary" size="standard" text="Knapp full" display="block" /> */}
            </div>
          </div>
          <div className="row spacer-mb-large">
            <div className="col spacer-mb-medium">
              <div className="text-standard spacer-mb-small"><strong>Standard</strong></div>
              <a href="javascript:void(0)" className="text-link">
                <span className="text-standard">Textlänkar</span>
              </a>
            </div>
            <div className="col spacer-mb-medium">
              <div className="text-standard spacer-mb-small"><strong>Hover</strong></div>
              <a href="javascript:void(0)" className="text-link">
                <span className="text-standard">Textlänkar</span>
              </a>
            </div>
            <div className="col spacer-mb-medium">
              <div className="text-standard spacer-mb-small"><strong>Active/focus</strong></div>
              <a href="javascript:void(0)" className="text-link">
                <span className="text-standard">Textlänkar</span>
              </a>
            </div>
            <div className="col spacer-mb-medium">
              <div className="text-standard spacer-mb-small"><strong>Visited</strong></div>
              <a href="#" className="text-link">
                <span className="text-standard">Textlänkar</span>
              </a>
            </div>
            <div className="col spacer-mb-medium">
              <div className="text-standard spacer-mb-small"><strong>Disabled</strong></div>
              <a href="javascript:void(0)" className="text-link disabled">
                <span className="text-standard">Textlänkar</span>
              </a>
            </div>
          </div>
          <div className="row spacer-mb-large">
            <div className="col col-7">
              <span className="text-standard"><strong>Standard</strong></span>
              <div className="text-standard">
                Andelen elever som tagit examen från något av de nationella
                <a href="javascript:void(0)" className="text-link text-link--icon">
                  <span className="text-standard line-height-normal">programmen har ökat</span>
                  <i className="icon-lock" />
                </a>
                med 3,8 procentenheter på fyra läsår. Våren 2014 tog 71,4 procent examen jämfört med 75,2 procent 2017.
              </div>
            </div>
          </div>
          <div className="row spacer-mb-xxlarge">
            <div className="col col-7">
              <span className="text-standard"><strong>Standard</strong></span>
              <div className="text-standard">
                Andelen elever som tagit examen från något av de nationella
                <a href="javascript:void(0)" className="text-link text-link--icon">
                  <span className="text-standard line-height-normal">programmen har ökat</span>
                  <i className="icon-hyperlink" />
                </a>
                med 3,8 procentenheter på fyra läsår. Våren 2014 tog 71,4 procent examen jämfört med 75,2 procent 2017.
              </div>
            </div>
          </div>
          <div className="spacer-mb-medium">
            <a href="javascript:void(0)" className="text-link text-link--icon">
              <span className="text-standard">Här hittar du bedöminingsstöd</span>
              <i className="icon-lock icon-lock--x1-33" />
            </a>
          </div>
          <div className="spacer-mb-xxlarge">
            <a href="javascript:void(0)" className="text-link text-link--icon">
              <span className="text-large">Här hittar du bedöminingsstöd</span>
              <i className="icon-lock icon-lock--x2" />
            </a>
          </div>
          <div className="row spacer-mb-large">
            <div className="col spacer-mb-medium">
              <div className="text-standard spacer-mb-small"><strong>Standard</strong></div>
              <button className="btn btn-icon icon-speaker">Lyssna</button>
            </div>
            <div className="col spacer-mb-medium">
              <div className="text-standard spacer-mb-small"><strong>Hover</strong></div>
              <button className="btn btn-icon icon-speaker">Lyssna</button>
            </div>
            <div className="col spacer-mb-medium">
              <div className="text-standard spacer-mb-small"><strong>Active/focus</strong></div>
              <button className="btn btn-icon icon-speaker">Lyssna</button>
            </div>
            <div className="col spacer-mb-medium">
              <div className="text-standard spacer-mb-small"><strong>Disabled</strong></div>
              <button className="btn btn-icon icon-speaker-disabled" disabled={true}>Lyssna</button>
            </div>
          </div>
          <div className="row spacer-mb-large">
            <div className="col spacer-mb-medium">
              <button className="btn btn-icon btn-icon--right icon-dropdown-arrow">Platshållare</button>
            </div>
            <div className="col spacer-mb-medium">
              <button className="btn btn-icon btn-icon--right icon-dropdown-arrow">Platshållare</button>
            </div>
            <div className="col spacer-mb-medium">
              <button className="btn btn-icon btn-icon--right icon-dropdown-arrow">Platshållare</button>
            </div>
            <div className="col spacer-mb-medium">
              <button className="btn btn-icon btn-icon--right icon-dropdown-arrow-disabled" disabled={true}>
                Platshållare
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
