import * as React from 'react';
import Navigation from '../components/navigation/Navigation';
import Startpage from '../components/startpage/Startpage';

export default class StartPage extends React.Component {
  render() {
    return (
      <div>
        <div className="spacer-mb-large spacer-mt-large text-center">
          <h1 className="h1">Startsida</h1>
        </div>
        <Navigation />
        <Startpage />
      </div>
    );
  }
}
