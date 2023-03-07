import { useRouter } from 'next/router';
import { useRef } from 'react';
import GetConsultationCTA from '@/components/GetConsultationCTA';

const Header = ({ toggleNavBar, activeNav }) => {
    const router = useRouter()

    const otpFormRef = useRef();

    const openLeadForm = ()=>{
        otpFormRef.current.openPopup();
    }

    const handleNavigation = (path) => {
        toggleNavBar();
        router.push(`${path}`);
    }

    return (
        <header className='newWebHead'>
            <GetConsultationCTA ref={otpFormRef} hideText lead_origin='header'/>
            <div className="container">
                <div className="navBar">
                    <div className="logo">
                        <nav className="hamBurger" role="navigation">
                            <div id="menuToggle">
                                <input type="checkbox" onClick={toggleNavBar} className={activeNav ? 'inputChecked' : ''} />
                                <span className="bars"></span>
                                <span className="bars"></span><span className="bars"></span>
                                <div id="menu" onClick={toggleNavBar}><a href="/" />
                                    <ul className="mainList" onClick={(e) => e.stopPropagation()}>
                                        <li className="mainLogo" onClick={() => handleNavigation('')}>
                                            <a href="" onClick={(e) => e.preventDefault()}>
                                                <img height='30px' width='80px' className="sideBarLogo" alt="Logo"
                                                    src="/assets/Logo.svg" />
                                            </a>
                                        </li>
                                        <li onClick={() => handleNavigation('/')}>
                                            <a href="" onClick={(e) => e.preventDefault()}>Home</a>
                                        </li>
                                        <li onClick={() => handleNavigation('/IELTS')}>
                                            <a href="/blogs" onClick={(e) => e.preventDefault()}>IELTS Prep</a>
                                        </li>
                                        <li onClick={() => handleNavigation('/blogs')}>
                                            <a href="/blogs" onClick={(e) => e.preventDefault()}>Blogs</a>
                                        </li>
                                        <li onClick={() => handleNavigation('/community')}>
                                            <a href="/community" onClick={(e) => e.preventDefault()}>Community Smart</a>
                                        </li>
                                        <li onClick={() => handleNavigation('/check-eligibility')}>
                                            <a href="/new/check-eligibility" onClick={(e) => e.preventDefault()}>Check Eligibility</a>
                                        </li>
                                        <li onClick={() => handleNavigation('/contact')}>
                                            <a href="/contact-us" onClick={(e) => e.preventDefault()}>Contact</a>
                                        </li>
                                        <li onClick={() => handleNavigation('/career')}>
                                            <a href="/contact-us" onClick={(e) => e.preventDefault()}>Career</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                        <img className="img-fluid mobileBackStop" height='100%' width='100%' src="/assets/Logo.svg" onClick={() => handleNavigation('/')} alt="keel logo"/>
                    </div>
                    <ul>
                        <li onClick={() => handleNavigation('/')}>
                            <a href="/" onClick={(e) => e.preventDefault()}>Home</a>
                        </li>
                        <li onClick={() => handleNavigation('/IELTS')}>
                            <a href="/blogs" onClick={(e) => e.preventDefault()}>IELTS Prep</a>
                        </li>
                        <li onClick={() => handleNavigation('/blogs')}>
                            <a href="/blogs" onClick={(e) => e.preventDefault()}>Blogs</a>
                        </li>
                        <li onClick={() => handleNavigation('/community')}>
                            <a href="/community" onClick={(e) => e.preventDefault()}>Community Smart</a>
                        </li>
                        {/* <li onClick={()=>handleNavigation('/resource')}>
                        <a href="/services" onClick={(e)=>e.preventDefault()}>Services</a>
                    </li> */}
                        <li onClick={() => handleNavigation('/check-eligibility')}>
                            <a href="/check-eligibility" onClick={(e) => e.preventDefault()}>Check Eligibility</a>
                        </li>
                        <li onClick={() => handleNavigation('/contact')}>
                            <a href="/contact-us" onClick={(e) => e.preventDefault()}>Contact</a>
                        </li>
                        <li onClick={() => handleNavigation('/career')}>
                            <a href="/contact-us" onClick={(e) => e.preventDefault()}>Career</a>
                        </li>
                    </ul>
                    <button className="getStrt" onClick={openLeadForm}>Get Started</button>
                </div>
            </div>
        </header>
    )
}

export default Header;