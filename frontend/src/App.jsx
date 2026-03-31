import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import About from './pages/About.jsx';
import Order from './pages/Order.jsx';
import Contact from './pages/Contact.jsx';

const App = () => {
  const [activePage, setActivePage] = useState('Home');

  const handleSetPage = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (activePage) {
      case 'Home':     return <Home setActivePage={handleSetPage} />;
      case 'Products': return <Products setActivePage={handleSetPage} />;
      case 'About':    return <About setActivePage={handleSetPage} />;
      case 'Order':    return <Order setActivePage={handleSetPage} />;
      case 'Contact':  return <Contact setActivePage={handleSetPage} />;
      default:         return <Home setActivePage={handleSetPage} />;
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar activePage={activePage} setActivePage={handleSetPage} />
      <main style={{ flex: 1 }}>
        {renderPage()}
      </main>
      <Footer setActivePage={handleSetPage} />
    </div>
  );
};

export default App;
