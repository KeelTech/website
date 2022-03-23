import React from 'react';
import {contactSection} from './style.js';

const Contact = ()=>{

    return(
        <section class={contactSection}>
        <div class="container">
            <div class="contactContainer">
                <div class="contactMainHeading">
                    <h2>Contact</h2>
                </div>
                <div class="row">
                    <div class="col-md-6 col-12">
                        <div class="getInTouch">
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
                    <div class="col-md-6 col-12">
                        <div class="contactForm">
                            <div class="formContainer">
                                <div class="inputForm">
                                    <input type="text"/>
                                    <label>Enter your Name</label>
                                </div>
                                <div class="inputForm">
                                    <input type="eamil"/>
                                    <label>Enter your email id</label>
                                </div>
                                <div class="inputForm">
                                    <input type="number"/>
                                    <label>Enter your contact number </label>
                                </div>
                                <div class="inputForm">
                                    <textarea class="customTextArea"></textarea>
                                    <label>Enter your message</label>
                                </div>
                                <button class="submitBtn">Send</button>
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