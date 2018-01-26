import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import WelcomePage from './gallery-pages/WelcomePage';
import NotFoundPage from './NotFoundPage';
import ButtonPage from './gallery-pages/ButtonPage';
import ContentNavigationPage from './gallery-pages/ContentNavigationPage';
import NavigationPage from './gallery-pages/NavigationPage';
import NewsPage from './gallery-pages/NewsPage';
import TextArticlePage from './gallery-pages/TextArticlePage';
import ImageArticlePage from './gallery-pages/ImageArticlePage';
import ImageArticleTwoPage from './gallery-pages/ImageArticleTwoPage';
import FormPage from './gallery-pages/FormPage';
import FooterPage from './gallery-pages/FooterPage';
import FeedbackPage from './gallery-pages/FeedbackPage';
import TocPage from './gallery-pages/TocPage';
import StartPage from './gallery-pages/StartPage';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="gallery-container">
          <div className="show-component">
            <Switch>
              <Route exact={true} path="/" component={WelcomePage} />
              <Route exact={true} path="/components/button" component={ButtonPage} />
              <Route exact={true} path="/components/navigation" component={NavigationPage} />
              <Route exact={true} path="/components/news" component={NewsPage} />
              <Route exact={true} path="/components/content-navigation" component={ContentNavigationPage} />
              <Route exact={true} path="/components/text-article" component={TextArticlePage} />
              <Route exact={true} path="/components/image-article" component={ImageArticlePage} />
              <Route exact={true} path="/components/image-article-two" component={ImageArticleTwoPage} />
              <Route exact={true} path="/components/form" component={FormPage} />
              <Route exact={true} path="/components/footer" component={FooterPage} />
              <Route exact={true} path="/components/feedback" component={FeedbackPage} />
              <Route exact={true} path="/components/toc" component={TocPage} />
              <Route exact={true} path="/components/startpage" component={StartPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
