const Contact = ()=>{

    return(
    <>
        <footer className="footerMain forContactPage">
        <div className="container">
            <div className="formMain">
                <div className="formCntnt">
                    <h1 className="conHed">Contact Us</h1>
                    <p className="contSubPera">We are world’s no.1 Tech enabled and customer friendly Immigration Platform</p>
                    <ul className="contLst">
                        <li>
                            <img className="img-fluid" src="/assets/mail1.svg" />
                            <p>hello@getkeel.com</p>
                        </li>
                        <li>
                            <img className="img-fluid" src="/assets/call.svg" />
                            <p>+91-9810206875, +1-416-277-5284</p>
                        </li>
                        <li>
                            <img className="img-fluid" src="/assets/loc.svg" />
                            <div>
                                <p>JMD Empire Square
                                    201-202, Mehrauli-Gurgaon Road, A Block, DLF Phase 1, Sector 28, Sarhol, Haryana,
                                    India 122002
                                </p>
                                <p className="topMargin">7b Pleasant Blvd, Suite 979, Toronto ON M4T 1K2, Canada</p>
                            </div>
                        </li>
                    </ul>
                    {/* <!-- <p>We Are Here To Make Your Canada Immigration Journey Possible</p> --> */}
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
            {/* <div className="keelFoot">
                <img className="img-fluid" src="/assets/Logo.svg" />
                <ul className="pageRedrct">
                    <li><a>Home</a></li>
                    <li><a>IELTS Prep</a></li>
                    <li><a>Blogs</a></li>
                    <li><a>Services</a></li>
                    <li><a>Check Eligibility</a></li>
                    <li><a>Contact</a></li>
                </ul>
                <p>Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom diska. Jinesade bel när feras redorade
                    i belogi. FAR paratyp i muvåning, och pesask vyfisat. Viktiga poddradio har un mad och inde. </p>
                <ul className="footSocialLIst">
                    <li><a><img className="img-fluid" src="/assets/face.svg" /></a></li>
                    <li><a><img className="img-fluid" src="/assets/twt.svg" /></a></li>
                    <li><a><img className="img-fluid" src="/assets/link.svg" /></a></li>
                    <li><a><img className="img-fluid" src="/assets/inst.svg" /></a></li>
                </ul>
            </div> */}
        </div>
    </footer>
    </>
    )
}

export default Contact;