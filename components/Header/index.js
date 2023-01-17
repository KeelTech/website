import { useState, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { container } from './style.js';


const Header = ({ activeNav, toggleNavBar }) => {
    //const [activeNav, setNav] = useState(false)
    const router = useRouter()
    // const toggleNavBar = ()=>{
    //     setNav(val=>!val)
    // }

    const activeTab = useMemo(() => {
        const pathName = router.pathname;
        let activeTabNo = 1;
        if (pathName.includes('services')) {
            activeTabNo = 2;
        } else if (pathName.includes('eligibility')) {
            activeTabNo = 3;
        } else if (pathName.includes('contact')) {
            activeTabNo = 4;
        } else if (pathName.includes('blogs')) {
            activeTabNo = 5;
        }
        return activeTabNo;
    }, [router.pathname])

    const handleNavigation= (path)=>{
        toggleNavBar();
        router.push(path);
    }

    const handleRedirection = () => {
        window.open('https://app.getkeel.com/?_ga=2.120116556.539293979.1650623580-1070651863.1634566153', '_blank');
    }

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
                                            <img className="sideBarLogo cursor-pointer" alt="Logo" src="../../keelLogo.svg" />
                                        </Link>
                                        <span onClick={toggleNavBar} className='closeSide'>
                                            <img className="img-fluid" alt="Logo" src="../../images/left-arrow.svg" />

                                        </span>
                                        <li onClick={()=>handleNavigation('/')}>
                                            <a href="/" onClick={(e)=>e.preventDefault()}>Home</a>
                                        </li>
                                        <li onClick={()=>handleNavigation('/blogs')}>
                                            <a href="/blogs" onClick={(e)=>e.preventDefault()}>Blogs</a>
                                        </li>
                                        <li onClick={()=>handleNavigation('/services')}>
                                            <a href="/services" onClick={(e)=>e.preventDefault()}>Services</a>
                                        </li>
                                        <li onClick={()=>handleNavigation('/check-eligibility')}>
                                            <a href="/check-eligibility" onClick={(e)=>e.preventDefault()}>Check Eligibility</a>
                                        </li>
                                        <li onClick={()=>handleNavigation('/contact-us')}>
                                            <a href="/contact-us" onClick={(e)=>e.preventDefault()}>Contact</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <Link href="/">
                            <img className="img-fluid cursor-pointer" src="../../keelLogo.svg" alt="keel"/>
                        </Link>
                    </div>
                    <div className="navListing">
                        <ul>
                            <li>
                                <Link href="/">
                                    <a className={activeTab == 1 ? "actTab" : ""}>Home</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/blogs">
                                    <a className={activeTab == 5 ? "actTab" : ""}>Blogs</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/services">
                                    <a className={activeTab == 2 ? "actTab" : ""}>Services</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/check-eligibility">
                                    <a className={activeTab == 3 ? "actTab" : ""}>Check Eligibility</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact-us">
                                    <a className={activeTab == 4 ? "actTab" : ""}>Contact</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <button className="getStarted" onClick={handleRedirection}>
                        <img className='img-fluid mobIContop' src='/images/keel-plane.svg'/>
                        <span>Get Started</span></button>
                </div>
            </div>
        </nav>
    )
}

export default Header;