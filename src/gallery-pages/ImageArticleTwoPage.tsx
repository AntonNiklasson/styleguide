import * as React from 'react';
import ImageArticleTwo from '../components/image-article/ImageArticleTwo';

export default class ImageArticleTwoPage extends React.Component {
  render() {
    return (
      <div className="full-height">
        <div className="spacer-mb-large spacer-mt-large text-center">
          <h1 className="h1">Bildpuffar 2</h1>
        </div>
        <ImageArticleTwo />
      </div>
    );
  }
}
