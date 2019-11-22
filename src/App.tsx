import React from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main>
        <section>
          <h1></h1>
        </section>
        <ul>
          <li>佐々木 達哉(Tatusya Sasaki)</li>
          <li>東京都世田谷区</li>
          <li>Web Developer</li>
          <li>設立：2013/05/07</li>
        </ul>
    
        <section>
          <h1></h1>
          
          <ul>
            <li>
              <a href="mailto:sasaki@crystalcode.jp">sasaki@crystalcode.jp</a>
            </li>
            <li>
              <a href="https://github.com/cc822jp">@cc822jp</a>
            </li>
            <li>
              <a href="https://medium.com/@cc822jp" target="_blank">Blog</a>
            </li>
          </ul>
        </section>
      </main>
      <footer>
        <p>Copyright (C) CrystalCode All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
