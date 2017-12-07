import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Menu from './Menu';
import WelcomePage from './gallery-pages/WelcomePage';
import NotFoundPage from './NotFoundPage';
import ButtonPage from './gallery-pages/ButtonPage';
import AlertPage from './gallery-pages/AlertPage';

class App extends React.Component {
  render() {
    return (
      <div className="full-height">
        <Header />
        <div className="container full-height">
          <div className="row gallery-container">
            <div className="col col-3 reset-padding">
              <Menu />
            </div>
            <div className="col col-9 show-component">
              <Switch>
                <Route exact={true} path="/" component={WelcomePage} />
                <Route exact={true} path="/components/alert" component={AlertPage} />
                <Route exact={true} path="/components/button" component={ButtonPage} />
                <Route component={NotFoundPage} />
              </Switch>
            </div>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
