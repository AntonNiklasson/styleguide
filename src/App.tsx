import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import WelcomePage from './gallery-pages/WelcomePage';
import NotFoundPage from './NotFoundPage';
import ButtonPage from './gallery-pages/ButtonPage';
import NavigationPage from './gallery-pages/NavigationPage';
import AlertPage from './gallery-pages/AlertPage';

class App extends React.Component {
  render() {
    return (
      <div className="full-height">
        <Header />
        <div className="gallery-container">
          <div className="show-component">
            <Switch>
              <Route exact={true} path="/" component={WelcomePage} />
              <Route exact={true} path="/components/alert" component={AlertPage} />
              <Route exact={true} path="/components/button" component={ButtonPage} />
              <Route exact={true} path="/components/navigation" component={NavigationPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
