import * as React from 'react';
import ImageArticle from '../components/image-article/ImageArticle';

export default class ImageArticlePage extends React.Component {
  render() {
    return (
      <div className="full-height">
        <div className="spacer-mb-large spacer-mt-large text-center">
          <h1 className="h1">Bildpuffar</h1>
        </div>
        <ImageArticle />
      </div>
    );
  }
}
