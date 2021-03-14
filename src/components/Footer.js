import React from 'react';
import '../styles/Footer.css'
import {
    Link,
    withRouter
} from "react-router-dom";


const Footer = () => {
    return (
        <nav className="navbar is-primary is-spaced is-fixed-bottom" style={{ zIndex: 1 }}>
            <div className="navbar-brand">
                <Link class="navbar-item" to="/">
                    <img style={{ minHeight: 5.2 + 'em', minWidth: 5 + 'em', margin: 0 + 'px', position: 'absolute', left: -32 + 'px' }} src="https://pbs.twimg.com/profile_images/1226878529331056640/EBT_zDUv_400x400.jpg" alt="Liftaris" height="200" />
                </Link>
            </div>
            <div className='navbar-menu navbar-end'>
                <div className="navbar-item has-text-centered">
                    <div>
                        <Link to='/' className="title">HOME</Link>
                    </div>
                </div>
                <div className="navbar-item has-text-centered">
                    <div>
                        <Link to='/projects' className="title">PROJECTS</Link>
                    </div>
                </div>
                <div className="navbar-item has-text-centered">
                    <div>
                        <p className="title">ABOUT</p>
                    </div>
                </div>
                <div className="navbar-item has-text-centered">
                    <div>
                        <p className="title">CONTACT</p>
                    </div>
                </div>
            </div>

        </nav>
    )
}

export default withRouter(Footer);