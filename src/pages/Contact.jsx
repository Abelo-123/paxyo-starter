import { useEffect } from 'react';

function Contact() {
  useEffect(() => {
    // Initialize Telegram Web App SDK
    if (window.Telegram?.WebApp) {
      window.Telegram.WebApp.ready();
    }
  }, []);

  const handleButtonClick = () => {
    if (window.Telegram?.WebApp) {
      window.Telegram.WebApp.showAlert('Hello from Telegram WebApp!');
    }
  };

  return (
    <div>
      Contact Us: Reach out at contact@example.com.
      <button onClick={handleButtonClick}>Click me</button>
    </div>
  );
}

export default Contact;
