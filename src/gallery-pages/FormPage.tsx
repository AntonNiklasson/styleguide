import * as React from 'react';
import Form from '../components/form/Form';

export default class FormPage extends React.Component {
  render() {
    return (
      <div className="full-height">
        <div className="spacer-mb-large spacer-mt-large text-center">
          <h1 className="h1">Formulär</h1>
        </div>
        <Form />
      </div>
    );
  }
}
