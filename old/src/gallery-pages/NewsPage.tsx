import * as React from 'react';
import News from '../components/news/News';

export default class NewsPage extends React.Component {
  render() {
    return (
      <div>
        <div className="spacer-mb-large spacer-mt-large text-center">
          <h1 className="h1">Nyhetslista</h1>
        </div>
        <News />
      </div>
    );
  }
}
