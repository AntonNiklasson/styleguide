import * as React from 'react';
import TextArticle from '../components/text-article/TextArticle';

export default class TextArticlePage extends React.Component {
  render() {
    return (
      <div>
        <div className="spacer-mb-large spacer-mt-large text-center">
          <h1 className="h1">Textpuffar</h1>
        </div>
        <TextArticle />
      </div>
    );
  }
}
