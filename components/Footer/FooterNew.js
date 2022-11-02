import { useRouter } from 'next/router';

const Footer = ()=>{

    const router = useRouter()

    const handleNavigation= (path)=>{
        //toggleNavBar();
        router.push(`/new/${path}`);
    }

    return (
        <footer className="footerMain">
        <div className="container">
            <div className="formMain d-none">
                <div className="formCntnt">
                    <p>We Are Here To Make Your Canada Immigration Journey Possible</p>
                </div>
                <div className="formInputMain">
                    <div className="inputForm">
                        <input type="text" />
                        <label>Full Name</label>
                    </div>
                    <div className="inputForm mobileInp">
                        <input type="text" />
                        <label>Contact Number</label>
                        <img className="img-fluid" src="/assets/ind.svg" />
                    </div>
                    <div className="inputForm">
                        <input type="email" />
                        <label>Email</label>
                    </div>
                    <div className="inputForm">
                        <textarea></textarea>
                        <label>Message</label>
                    </div>
                    <button className="submitBtn">Send</button>
                </div>
            </div>
            <div className="keelFoot">
                <img className="img-fluid" src="/assets/Logo.svg" />
                <ul className="pageRedrct">
                <li onClick={()=>handleNavigation('/')}>
                    <a href="/" onClick={(e)=>e.preventDefault()}>Home</a>
                </li>
                <li onClick={()=>handleNavigation('/IELTS')}>
                    <a href="/blogs" onClick={(e)=>e.preventDefault()}>IELTS Prep</a>
                </li>
                <li onClick={()=>handleNavigation('/blogs')}>
                    <a href="/blogs" onClick={(e)=>e.preventDefault()}>Blogs</a>
                </li>
                {/* <li onClick={()=>handleNavigation('/resource')}>
                    <a href="/services" onClick={(e)=>e.preventDefault()}>Services</a>
                </li> */}
                <li onClick={()=>handleNavigation('/resource')}>
                    <a href="/check-eligibility" onClick={(e)=>e.preventDefault()}>Check Eligibility</a>
                </li>
                <li onClick={()=>handleNavigation('/contact')}>
                    <a href="/contact-us" onClick={(e)=>e.preventDefault()}>Contact</a>
                </li>
                <li onClick={()=>handleNavigation('/career')}>
                    <a href="/contact-us" onClick={(e)=>e.preventDefault()}>Career</a>
                </li>
                <li onClick={()=>handleNavigation('/about')}>
                    <a href="/contact-us" onClick={(e)=>e.preventDefault()}>About Us</a>
                </li>
                </ul>
                <p>Results that speak loud and clear. Join the league of the top 1% achievers in the world!</p>
                <ul className="footSocialLIst">
                    <li><a><img className="img-fluid" src="/assets/face.svg" /></a></li>
                    <li><a><img className="img-fluid" src="/assets/twt.svg" /></a></li>
                    <li><a><img className="img-fluid" src="/assets/link.svg" /></a></li>
                    <li><a><img className="img-fluid" src="/assets/inst.svg" /></a></li>
                </ul>
            </div>

        </div>
    </footer>
    )
}

export default Footer;