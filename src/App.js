import React from 'react';
import TopMenu from './components/TopMenu';
import PublicPage from './components/PublicPage'
import './App.css';

function App() {

  return (
    <div className="App">
      <TopMenu />
      <PublicPage></PublicPage>
      <PrivatePage></PrivatePage>
    </div>
  );
}

export default App;
