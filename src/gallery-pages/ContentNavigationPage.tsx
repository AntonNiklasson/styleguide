import * as React from 'react';
import ContentNavigation from '../components/content-navigation/ContentNavigation';

export default class ContentNavigationPage extends React.Component {
  render() {
    return (
      <div className="full-height">
        <div className="spacer-mb-large spacer-mt-large text-center">
          <h1 className="h1">Innehållsnavigering</h1>
        </div>
        <ContentNavigation />
      </div>
    );
  }
}
