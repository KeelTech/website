import { useState, useMemo } from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';

import { container } from './style.js';


const Header = () => {
    const [activeNav, setNav] = useState(false)
    const router = useRouter()
    const toggleNavBar = ()=>{
        setNav(val=>!val)
    }

    const activeTab = useMemo(()=>{
        const pathName = router.pathname;
        let activeTabNo = 1;
        if(pathName.includes('services')){
            activeTabNo = 2;
        }else if(pathName.includes('eligibility')){
            activeTabNo = 3;
        }else if(pathName.includes('contact')){
            activeTabNo = 4;
        }
        return activeTabNo;
    },[router.pathname])

    return (
        <nav className={container}>
            <div className="container">
                <div className="navBarMain">
                    <div className="main-logo">
                        <div id="menuToggle" className='toggleMain'>
                            <input type="checkbox" onClick={toggleNavBar} className={activeNav ? 'inputClick' : ''} />
                            <span className="bars"></span>
                            <span className="bars"></span>
                            <span className="bars"></span>
                            <div id="menu">

                                <div className="navListingMobile">
                                    <ul className='mainList'>
                                        <Link href="/">
                                            <img className="sideBarLogo cursor-pointer" alt="Logo" src="https://getkeel.com/wp-content/uploads/2021/07/Logo-1-1-1024x367.jpg" />
                                        </Link>
                                        <li>
                                            <Link href="/">
                                                <a onClick={toggleNavBar}>Home</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/services">
                                                <a onClick={toggleNavBar}>Services</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/eligibility">
                                                <a onClick={toggleNavBar}>Check Eligibility</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/contact">
                                                <a onClick={toggleNavBar}>Contact</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <Link href="/">
                        <img className="img-fluid cursor-pointer" src="https://getkeel.com/wp-content/uploads/2021/07/Logo-1-1-1024x367.jpg" />
                        </Link>
                    </div>
                    <div className="navListing">
                        <ul>
                            <li>
                                <Link href="/">
                                    <a className={activeTab==1?"actTab":""}>Home</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/services">
                                    <a className={activeTab==2?"actTab":""}>Services</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/eligibility">
                                    <a className={activeTab==3?"actTab":""}>Check Eligibility</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact">
                                    <a className={activeTab==4?"actTab":""}>Contact</a>
                                </Link>
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