import React from 'react'
import './App.css'
import { FaGithub, FaMedium } from 'react-icons/fa'
import Splash from './components/Splash'

class App extends React.Component<{}> {
  render() {
    return (
      <div className="App">
        <main>
          <section className="App__section">
            <h1>CRYSTAL CODE</h1>

            <ul className="list">
              <li className="item">佐々木 達哉 / Tatusya Sasaki</li>
              <li className="item">Web Developer</li>
              <li className="item">Tokyo, Japan</li>
              <li className="item">Founded in May 7, 2013</li>
            </ul>

            <ul className="list">
              <li className="item item--icon">
                <div className="icon">
                  <FaGithub></FaGithub>
                </div>
                <a
                  href="https://github.com/cc822jp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @cc822jp
                </a>
              </li>
              <li className="item item--icon">
                <div className="icon">
                  <FaMedium></FaMedium>
                </div>
                <a
                  href="https://medium.com/@cc822jp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @cc822jp
                </a>
              </li>
            </ul>
          </section>

          <section className="App__section">
            <h2>CONTACT</h2>

            <p className="text">
              Webサイト制作、Webアプリケーション開発のご相談はメールにて承っております。
            </p>

            <p className="emal">
              <a href="mailto:sasaki@crystalcode.jp">sasaki@crystalcode.jp</a>
            </p>
          </section>
        </main>

        <footer className="App__footer">
          <p>&copy; CrystalCode</p>
        </footer>

        <Splash></Splash>
      </div>
    )
  }
}

export default App
