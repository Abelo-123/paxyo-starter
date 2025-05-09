import { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

function App() {
  const [activeTab, setActiveTab] = useState('Home');

  const renderContent = () => {
    switch (activeTab) {
      case 'Home':
        return <Home />;
      case 'About':
        return <About />;
      case 'Services':
        return <Services />;
      case 'Contact':
        return <Contact />;
      default:
        return <div>Page not found.</div>;
    }
  };

  return (
    <>
      <div className="tabs">
        <button onClick={() => setActiveTab('Home')}>Home</button>
        <button onClick={() => setActiveTab('About')}>About</button>
        <button onClick={() => setActiveTab('Services')}>Services</button>
        <button onClick={() => setActiveTab('Contact')}>Contact</button>
      </div>
      <div className="content">
        {renderContent()}
      </div>
    </>
  );
}

export default App;
