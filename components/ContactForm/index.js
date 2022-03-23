import { container } from './style.js';

const ContactForm = ()=>{

    return(
    <section className={container}>
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-12">
                    <div className="contactLeftCont">
                        <h4>Contact us</h4>
                        <img className="img-fluid" src="/images/box.png" />
                    </div>
                </div>
                <div className="col-md-6 col-12">
                    <div className="contactForm">
                        <div className="formContainer">
                            <div className="inputForm">
                                <input type="text" />
                                <label>Enter your Name</label>
                            </div>
                            <div className="inputForm">
                                <input type="eamil" />
                                <label>Enter your email id</label>
                            </div>
                            <div className="inputForm">
                                <input type="number" />
                                <label>Enter your contact number </label>
                            </div>
                            <div className="inputForm">
                                <textarea className="customTextArea"></textarea>
                                <label>Enter your message</label>
                            </div>
                            <button className="submitBtn">Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default ContactForm