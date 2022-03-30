import Link from 'next/link';

import { container } from './style.js';

const Header = () => {

    return (
        <nav className={container}>
            <div className="container">
                <div className="navBarMain">
                    <div className="main-logo">
                        <div id="menuToggle" className='toggleMain'>
                            <input type="checkbox" className='inputClick' />
                            <span className="bars"></span>
                            <span className="bars"></span>
                            <span className="bars"></span>
                            <div id="menu">

                                <div className="navListingMobile">
                                    <ul className='mainList'>
                                        <Link href="/">
                                            <img className="sideBarLogo" alt="Logo" src="https://getkeel.com/wp-content/uploads/2021/07/Logo-1-1-1024x367.jpg" />
                                        </Link>
                                        <li>
                                            <Link href="/">Home</Link>
                                        </li>
                                        <li>
                                            <Link href="/services">Service</Link>
                                        </li>
                                        <li>
                                            <Link href="/eligibility">Check Eligibility</Link>
                                        </li>
                                        <li>
                                            <Link href="/contact"><a>Contact</a></Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <img className="img-fluid" src="https://getkeel.com/wp-content/uploads/2021/07/Logo-1-1-1024x367.jpg" />
                    </div>
                    <div className="navListing">
                        <ul>
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <Link href="/services">Service</Link>
                            </li>
                            <li>
                                <Link href="/eligibility">Check Eligibility</Link>
                            </li>
                            <li>
                                <Link href="/contact"><a>Contact</a></Link>
                            </li>
                        </ul>
                    </div>
                    <button className="getStarted">Get Started</button>
                </div>
            </div>
        </nav>
    )
}

export default Header;