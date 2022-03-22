import { container } from './style.js';

const Header = ()=>{

    return(
    <nav className={container}>
        <div className="container">
            <div className="navBarMain">
                <div className="main-logo">
                    <img className="img-fluid" src="https://getkeel.com/wp-content/uploads/2021/07/Logo-1-1-1024x367.jpg" />
                </div>
                <div className="navListing">
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
                <button className="getStarted">Get Started</button>
            </div>
        </div>
    </nav>
    )
}

export default Header;