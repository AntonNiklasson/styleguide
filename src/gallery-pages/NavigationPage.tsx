import * as React from 'react';
import Navigation from '../components/navigation/Navigation';

export default class NavigationPage extends React.Component {
  render() {
    return (
      <div className="full-height">
        <div className="spacer-mb-large spacer-mt-large text-center">
          <h1 className="h1">Huvudmeny</h1>
        </div>
        <Navigation />
      </div>
    );
  }
}
