import React from 'react';
import Night from './containers/night/night';
import Frame from './components/frame/frame';
import './App.css';


const App: React.FC = () => {
  return (
    <Night>
      <Frame/>
    </Night>
  );
}

export default App;
