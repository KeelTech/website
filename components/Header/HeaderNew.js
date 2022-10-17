import { useRouter } from 'next/router';

const Header = ({toggleNavBar, activeNav})=>{
    const router = useRouter()

    const handleNavigation= (path)=>{
        toggleNavBar();
        router.push(`/new${path}`);
    }

    return(
        <header>
            <div className="container">
                <div className="navBar">
                    <div className="logo">
                    <nav className="hamBurger" role="navigation">
                        <div id="menuToggle">
                            <input type="checkbox" onClick={toggleNavBar} className={activeNav ? 'inputChecked' : ''}/>
                            <span className="bars"></span>
                            <span className="bars"></span><span className="bars"></span>
                            <div id="menu"><a href="/"/>
                                <ul className="mainList">
                                <li className="mainLogo" onClick={()=>handleNavigation('')}>
                                    <a href="" onClick={(e)=>e.preventDefault()}>
                                        <img className="sideBarLogo" alt="Logo"
                                        src="/assets/Logo.svg"/>
                                    </a>
                                </li>
                                <li onClick={()=>handleNavigation('/')}>
                                    <a href="" onClick={(e)=>e.preventDefault()}>Home</a>
                                </li>
                                <li onClick={()=>handleNavigation('/IELTS')}>
                                    <a href="/blogs" onClick={(e)=>e.preventDefault()}>IELTS Prep</a>
                                </li>
                                <li onClick={()=>handleNavigation('/blogs')}>
                                    <a href="/blogs" onClick={(e)=>e.preventDefault()}>Blogs</a>
                                </li>
                                <li onClick={()=>handleNavigation('/resource')}>
                                    <a href="/services" onClick={(e)=>e.preventDefault()}>Services</a>
                                </li>
                                <li onClick={()=>handleNavigation('/resource')}>
                                    <a href="/check-eligibility" onClick={(e)=>e.preventDefault()}>Check Eligibility</a>
                                </li>
                                <li onClick={()=>handleNavigation('/contact')}>
                                    <a href="/contact-us" onClick={(e)=>e.preventDefault()}>Contact</a>
                                </li>
                                <li onClick={()=>handleNavigation('/career')}>
                                    <a href="/contact-us" onClick={(e)=>e.preventDefault()}>Career</a>
                                </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                        <img className="img-fluid" src="/assets/Logo.svg" onClick={()=>handleNavigation('/')}/>
                    </div>
                    <ul>
                    <li onClick={()=>handleNavigation('')}>
                        <a href="/" onClick={(e)=>e.preventDefault()}>Home</a>
                    </li>
                    <li onClick={()=>handleNavigation('/IELTS')}>
                        <a href="/blogs" onClick={(e)=>e.preventDefault()}>IELTS Prep</a>
                    </li>
                    <li onClick={()=>handleNavigation('/blogs')}>
                        <a href="/blogs" onClick={(e)=>e.preventDefault()}>Blogs</a>
                    </li>
                    <li onClick={()=>handleNavigation('/resource')}>
                        <a href="/services" onClick={(e)=>e.preventDefault()}>Services</a>
                    </li>
                    <li onClick={()=>handleNavigation('/resource')}>
                        <a href="/check-eligibility" onClick={(e)=>e.preventDefault()}>Check Eligibility</a>
                    </li>
                    <li onClick={()=>handleNavigation('/contact')}>
                        <a href="/contact-us" onClick={(e)=>e.preventDefault()}>Contact</a>
                    </li>
                    <li onClick={()=>handleNavigation('/career')}>
                        <a href="/contact-us" onClick={(e)=>e.preventDefault()}>Career</a>
                    </li>
                    </ul>
                    <button className="getStrt">Get Started</button>
                </div>
            </div>
        </header>
    )
}

export default Header;