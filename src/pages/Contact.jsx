import React, { useEffect } from 'react';
import WebApp from '@twa-dev/sdk';

function TelegramAlertButton() {
  useEffect(() => {
    WebApp.ready(); // Mark WebApp as ready
  }, []);

  const handleClick = () => {
    WebApp.showAlert('Hello from Telegram WebApp SDK!');
  };

  return (
    <div>
      <h2>Telegram WebApp Alert Example</h2>
      <button onClick={handleClick}>Show Alert</button>
    </div>
  );
}

export default TelegramAlertButton;
