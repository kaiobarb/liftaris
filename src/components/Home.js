import React from 'react';
import logo from "../Liftaris.png";


const Home = () => {
  return (
    <div className='container'>
      <div className='columns is-vcentered'>
        <div className='column is-4'>
          <p class="image">
            <img className='is-rounded' src={logo} style={{border:4+"px solid #D0D059"}} alt='Octomunkulus' />
          </p>
        </div>
        <div className='column is-centered'>
          <h1 className='title is-secondary is-size-1'>Kaio Barbosa | Liftaris</h1>
          <div className='columns is-vcentered'>
            <div className='column is-1'>
              <a className='is-secondary' href='https://www.twitter.com/Liftaris1' target='blank'>Twitter</a>
            </div>
            <div className='column is-1'>
              <a className='is-secondary' href='https://www.github.com/kaiobarb' target='blank'>Github</a>
            </div>
            <div className='column is-1'>
              <a className='is-secondary' href='https://www.twitch.com/Liftaris' target='blank'>Twitch</a>
            </div>
            <div className='column is-1'>
              <a className='is-secondary' href='https://liftaris.itch.io/' target='blank'>Itch.io</a>
            </div>
            {/* <div className='column is-5'>
              <a className='is-secondary is-pulled-right is-size-4' href='https://blog.liftaris.com'><b>Blog</b></a>
            </div> */}
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home