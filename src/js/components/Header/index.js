import React from 'react';

import { container } from './style.js';

const Header = ()=>{

    return(
    <nav className={container}>
        <div class="container">
            <div class="navBarMain">
                <div class="main-logo">
                    <img class="img-fluid" src="https://getkeel.com/wp-content/uploads/2021/07/Logo-1-1-1024x367.jpg" />
                </div>
                <div class="navListing">
                    <ul>
                        <li>
                            <a>Home</a>
                        </li>
                        <li>
                            <a>Service</a>
                        </li>
                        <li>
                            <a>Check Eligibility</a>
                        </li>
                        <li>
                            <a>Contact</a>
                        </li>
                    </ul>
                </div>
                <button class="getStarted">Get Started</button>
            </div>
        </div>
    </nav>
    )
}

export default Header;