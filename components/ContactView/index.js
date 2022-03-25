import { contactSection } from './style.js';

const Contact = ()=>{

    return(
        <section className={contactSection}>
        <div className="container">
            <div className="contactContainer">
                <div className="contactMainHeading">
                    <h2>Contact</h2>
                </div>
                <div className="row vr-gap-30">
                    <div className="col-md-6 col-12">
                        <div className="getInTouch">
                            <h4>GET IN TOUCH </h4>
                            <p>Our team is here to help you in your Canada Immigration procedure. Feel free to contact
                                us if you have any queries.
                            </p>
                            <h4>SAY G’DAY
                            </h4>
                            <h5>hello@getkeel.com
                                <br/> +1-416-277-5284
                            </h5>
                        </div>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="contactForm">
                            <div className="formContainer">
                                <div className="inputForm">
                                    <input type="text"/>
                                    <label>Enter your Name</label>
                                </div>
                                <div className="inputForm">
                                    <input type="eamil"/>
                                    <label>Enter your email id</label>
                                </div>
                                <div className="inputForm">
                                    <input type="number"/>
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
        </div>
    </section>
    )
}

export default Contact;