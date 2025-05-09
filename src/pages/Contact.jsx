import { useEffect } from 'react';
import { showAlert, init } from 'tgui-core';

function Contact() {
  useEffect(() => {
    // Initialize Telegram Web App SDK
    if (window.Telegram?.WebApp) {
      window.Telegram.WebApp.ready();
    }

    // Initialize tgui-core (important for custom UI like alert, confirm, etc.)
    init();
  }, []);

  const handleButtonClick = () => {
    showAlert('Hello from Telegram WebApp using tgui-core!');
  };

  return (
    <div>
      Contact Us: Reach out at contact@example.com.
      <button onClick={handleButtonClick}>Click me</button>
    </div>
  );
}

export default Contact;
