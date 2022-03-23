import Link from 'next/link';

import { container } from './style.js';

const Footer = ()=>{

    return(
    <footer className={container}>
        <div className="container">
            <div className="row">
                <div className="col-md-3 col-12">
                    <div className="socialBtns">
                        <div>
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M17.3306 2.35254H7.33057C4.56914 2.35254 2.33057 4.59112 2.33057 7.35254V17.3525C2.33057 20.114 4.56914 22.3525 7.33057 22.3525H17.3306C20.092 22.3525 22.3306 20.114 22.3306 17.3525V7.35254C22.3306 4.59112 20.092 2.35254 17.3306 2.35254Z"
                                    stroke="#FAFAFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                </path>
                                <path
                                    d="M16.3308 11.7226C16.4542 12.5548 16.312 13.4048 15.9245 14.1516C15.537 14.8984 14.9239 15.504 14.1724 15.8823C13.4209 16.2605 12.5692 16.3922 11.7385 16.2585C10.9079 16.1249 10.1405 15.7327 9.5456 15.1378C8.95068 14.5428 8.55849 13.7755 8.42483 12.9448C8.29116 12.1141 8.42283 11.2625 8.80109 10.511C9.17935 9.75945 9.78495 9.14634 10.5317 8.75884C11.2785 8.37134 12.1285 8.22918 12.9608 8.3526C13.8097 8.47848 14.5956 8.87406 15.2025 9.4809C15.8093 10.0877 16.2049 10.8737 16.3308 11.7226Z"
                                    stroke="#FAFAFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                </path>
                                <path d="M17.8306 6.85254H17.8406" stroke="#FAFAFA" strokeWidth="2"
                                    strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </div>
                        <div>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
                                    stroke="#FAFAFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                </path>
                            </svg>
                        </div>
                        <div>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8V8Z"
                                    stroke="#FAFAFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                </path>
                                <path d="M6 9H2V21H6V9Z" stroke="#FAFAFA" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round"></path>
                                <path
                                    d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
                                    stroke="#FAFAFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                </path>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="col-md-7 col-12">
                    <div className="redirection">
                        <ul>
                            <li> <Link href="/">Home</Link></li>
                            <li> <Link href="/services">Services</Link></li>
                            <li><Link href="/">Check Eligibility</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-2 col-12">
                    <div className="copyRight">
                        <p>© 2022 All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer