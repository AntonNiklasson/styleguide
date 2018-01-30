import * as React from 'react';
import Notification from '../components/notification/Notification';

export default class NotificationPage extends React.Component {
  render() {
    return (
      <div className="notification-page">
        <div className="spacer-mb-large spacer-mt-large text-center">
          <h1 className="h1">Notifieringar</h1>
        </div>
        <Notification />
      </div>
    );
  }
}
