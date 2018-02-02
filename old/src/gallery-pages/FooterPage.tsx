import * as React from 'react';
import Footer from '../components/footer/Footer';

export default class FooterPage extends React.Component {
  render() {
    return (
      <div>
        <div className="spacer-mb-large spacer-mt-large text-center">
          <h1 className="h1">Sidfot</h1>
        </div>
        <Footer />
      </div>
    );
  }
}
