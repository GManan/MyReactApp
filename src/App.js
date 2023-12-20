import React from 'react';
import TopMenu from './react/components/TopMenu';
import PublicPage from './react/components/PublicPage'
import './App.css';

function App() {

  return (
    <div className="App">
      <TopMenu />
      <PublicPage></PublicPage>
      {/* <header className="App-header">
        <TopMenu />
      </header>
      <body>

      </body> */}
    </div>
  );
}

export default App;
