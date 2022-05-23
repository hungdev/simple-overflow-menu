import React, { useState, useEffect } from 'react';
import './App.scss';
import Menu from './Menu';

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="App">
      <Menu
      // position='right'
      >
        <div>aaaa</div>
        <div>bbbb</div>
        <div>cccc</div>
      </Menu>
      <div>ahoo</div>
    </div>
  );
}

export default App;
