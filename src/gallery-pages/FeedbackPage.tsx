import * as React from 'react';
import Feedback from '../components/feedback/Feedback';

export default class FeedbackPage extends React.Component {
  render() {
    return (
      <div className="full-height feedback-page">
        <div className="spacer-mb-large spacer-mt-large text-center">
          <h1 className="h1">Feedback</h1>
        </div>
        <Feedback />
      </div>
    );
  }
}
