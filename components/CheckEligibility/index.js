import { useState } from 'react';
import { container } from './style.js';

const CheckEligibily = ()=>{

    return(
    <section className={container}>
        <div className="container">

            <div className="row align-center">
                <div className="col-md-6 col-12">
                    <div className="immigrateForm">
                        <h1>Want to Immigrate <br/>
                            to <span>Canada?</span>
                        </h1>
                        <p>Keel connects you with Canada’s<span> best licensed immigration consultants.</span></p>
                        <div className="formContainer">
                            <div className="inputForm">
                                <input type="eamil" />
                                <label>Enter your email id</label>
                            </div>
                            <div className="inputForm">
                                <input type="number" />
                                <label>Enter your contact number </label>
                            </div>
                            <button className="submitBtn">Check your Eligibility for Free</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-12">
                    <div className="animatedGif">
                        <img src="https://getkeel.com/wp-content/uploads/2022/01/Feature-1.png" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default CheckEligibily;