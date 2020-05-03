import React from 'react';
import 'bulma/css/bulma.css';
import './index.css';
import '@fortawesome/fontawesome-free'
import logo from './Liftaris.png'

class App extends React.Component {
  render() {
    return (
      <div>
        <div className='hero is-background is-fullheight'>
          <div className='hero-head'></div>
          <div className='hero-body'>
            <div className='container'>
                  <div className='columns is-vcentered'>
                    <div className='column is-4'>
                      <p class="image">
                        <img className='is-rounded' src={logo} alt='Octomunkulus' />
                      </p>
                    </div>
                    <div className='column is-centered'>
                      <h1 className='title is-secondary is-size-1'>Kaio Barbosa | Liftaris</h1>
                      <div className='columns'>
                        <div className='column is-1'>
                          <a className='is-secondary' href='https://www.twitter.com/Liftaris1' target='blank'>Twitter</a>
                        </div>
                        <div className='column is-1'>
                          <a className='is-secondary' href='https://www.github.com/kaiobarb' target='blank'>Github</a>
                        </div>
                        <div className='column is-1'>
                          <a className='is-secondary' href='https://www.twitch.com/Liftaris' target='blank'>Twitch</a>
                        </div>
                      </div>
                    </div>
                  </div>
 
            </div>
          </div>
          <div className='hero-foot'></div>
        </div>
      </div>
    );
  }
}

export default App;
