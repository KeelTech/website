import { contactSection } from './style.js';
import ContactForm from '@/components/ContactForm';
const Contact = () => {

    return (
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
                                    <br /> +1-416-277-5284
                                </h5>
                            </div>
                        </div>
                        <div className="col-md-6 col-12 customFormIn">
                            <ContactForm />

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;