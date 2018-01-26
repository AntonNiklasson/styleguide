import * as React from 'react';
import Navigation from '../components/navigation/Navigation';
import SubStartpage from '../components/substartpage/SubStartpage';

export default class SubStartPage extends React.Component {
  render() {
    return (
      <div>
        <div className="spacer-mb-large spacer-mt-large text-center">
          <h1 className="h1">Understartsida</h1>
        </div>
        <Navigation />
        <SubStartpage />
      </div>
    );
  }
}
