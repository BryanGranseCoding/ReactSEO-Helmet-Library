import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { HelmetProvider } from 'react-helmet-async';
import { Home } from './components/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <HelmetProvider>
      <>
      <Home />
      </>
    </HelmetProvider>
    
  );
}

export default App
