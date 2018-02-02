import * as React from 'react';
import Toc from '../components/toc/Toc';

export default class TocPage extends React.Component {
  render() {
    return (
      <div>
        <div className="spacer-mb-large spacer-mt-large text-center">
          <h1 className="h1">Table of content</h1>
        </div>
        <Toc />
      </div>
    );
  }
}
