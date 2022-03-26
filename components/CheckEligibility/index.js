import { useState } from 'react';
import Image from 'next/image'

import { validateEmail } from '@/helpers/utils.js';
import { createLead } from '@/actions/index.js';
import { container } from './style.js';

const CheckEligibily = ()=>{
    const [email, setEmail] = useState('');
    const [contactNo, setContactNo] = useState('');
console.log(process.env.NEXT_PUBLIC_ANALYTICS_ID);
    const handleEmailChange = (e)=>{
        setEmail(e.target.value)
    }

    const handleEmailKeyPress = (e)=>{
        const target = e;
        if(target.key=='Enter'){
            if(validateEmail(email)){
                target.preventDefault();
                document.getElementById('contactNo').focus();
            }
        }
    }

    const handleContactChange = (e)=>{
        setContactNo(e.target.value)
    }

    const handleContactKeyPress = (e)=>{
        const target = e;
        if(target.key=='Enter'){
            target.preventDefault();
            checkEligibility();
        }
    }

    const checkEligibility = ()=>{
        //alert('check');
        const postData = {
            email, 
            phone: contactNo
        }
        createLead(postData).then((resp)=>{
            console.log(resp);
        }).catch((e)=>{
            console.log(e);
        })
    }

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
                                <input type="eamil" value={email} onChange={handleEmailChange} onKeyPress={handleEmailKeyPress}/>
                                <label>Enter your email id</label>
                            </div>
                            <div className="inputForm">
                                <input type="number" id="contactNo" value={contactNo} onChange={handleContactChange} onKeyPress={handleContactKeyPress}/>
                                <label>Enter your contact number </label>
                            </div>
                            <button className="submitBtn" onClick={checkEligibility}>Check your Eligibility for Free</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-12">
                    <div className="animatedGif">
                        <Image layout="responsive" src="https://getkeel.com/wp-content/uploads/2022/01/Feature-1.png" className="img-fluid" width={450} height={450} priority/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default CheckEligibily;