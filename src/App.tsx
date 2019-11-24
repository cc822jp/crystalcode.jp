import React from 'react';
import {ReactComponent as Logo} from './logo.svg';
import './App.css';

interface State {
  isLoaded: boolean;
  isSplashHide: boolean;
}

class App extends React.Component<{}, State> {
  state: State = {
    isLoaded: false,
    isSplashHide: false
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoaded: true,
      });
    }, 500);

    setTimeout(() => {
      this.setState({
        isSplashHide: true,
      });
    }, 3000);
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <main>
          <section>
            <h1>
              CRYSTAL CODE
            </h1>

            <div className="profile">
              <div className="profile__item">
                <ul>
                  <li>佐々木 達哉(Tatusya Sasaki)</li>
                  <li>東京都世田谷区</li>
                  <li>Web Developer</li>
                  <li>設立：2013/05/07</li>
                </ul>

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
              </div>
            </div>

          </section>

          <section>

            <p></p>
          </section>

          <section>
            <h1>Web制作のご相談</h1>

            <div>
              Web制作のご相談に関してはTicketにて承っています。
            </div>
          </section>
        </main>
        <footer className={"footer"}>
          <p>Copyright (C) CrystalCode All Rights Reserved.</p>
        </footer>

        {(() => {
          if (this.state.isSplashHide) {
            // return;
          }

          return(
            <div className={this.state.isLoaded ? 'splash is-animate' : 'splash'}>
              <div className="splashLogoWrapper">
                <Logo className={this.state.isLoaded ? 'is-animate' : ''}></Logo>
              </div>
            </div>
          )
        })()}


      </div>
    );
  }
}

export default App;
