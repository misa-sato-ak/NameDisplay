import React from 'react';
import './App.css';
import NameDisplay from './NameDisplay';

const App = () => {
  const name = 'React Practice';
  return (
    <div className="app-container">
      <h1 className="app-heading">名前表示アプリ</h1>
      <NameDisplay name={name} />
    </div>
  );
};

export default App;  
