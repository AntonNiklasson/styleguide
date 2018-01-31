import * as React from 'react';
import Accordion from '../components/accordion/Accordion';

export default class AccordionPage extends React.Component {
  render() {
    return (
      <div>
        <div className="spacer-mb-large spacer-mt-large text-center">
          <h1 className="h1">Accordion</h1>
        </div>
        <Accordion />
      </div>
    );
  }
}
