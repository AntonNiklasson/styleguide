import * as React from 'react';
import Button from '../components/button/Button';

export default class ButtonPage extends React.Component {
  render() {
    return (
      <div className="button-page">
        <h1>Knappar</h1>
        <div className="spacer-mb-medium">
          <h4>Liten knapp</h4>
          <Button size="small" text="Hejsan" />
        </div>
        <div className="spacer-mb-medium">
          <h4>Standard knapp</h4>
          <Button size="standard" text="Hejsan" />
        </div>
        <div className="spacer-mb-medium">
          <h4>Stor knapp</h4>
          <Button size="large" text="Hejsan" />
        </div>
      </div>
    );
  }
}
