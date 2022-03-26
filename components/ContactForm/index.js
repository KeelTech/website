import { useState } from 'react';

import { validateEmail } from '@/helpers/utils.js';
import { contactWebsite } from '@/actions/index.js';

import { container } from './style.js';

const ContactForm = ()=>{

    const[dataParams, setDataParams] = useState({
        "name" : "",
        "email" : "",
        "phone" : "",
        "message" : ""
    })

    const { name, email, phone, message } = dataParams;

    const setData = (val , key)=>{

        setDataParams((oldVal)=>{
            return {
                ...oldVal,
                [key]: val
            }
        })
    }

    const handleEmailKeyPress = (e, key)=>{
        const target = e;
        if(target.key=='Enter'){
            if(key ==="email"){
                if(!validateEmail(email)){
                    target.preventDefault();
                    alert('enter valid email');
                    return;
                }
            }else if(key==="message"){
                saveData();
                return;
            }
            document.getElementById(key).focus();
        }
    }
    console.log(dataParams);

    const saveData = ()=>{
        if(!name){
            alert('Please enter valid name')
            return;
        }
        if(!email){
            alert('Please enter valid email')
            return;
        }
        if(!validateEmail(email)){
            alert('Please enter valid email')
            return;
        }
        if(!phone){
            alert('Please enter valid phone number')
            return;
        }
        if(!message){
            alert('Please enter valid message')
            return;
        }
        contactWebsite(dataParams).then((resp)=>{
            console.log(resp);
        }).catch((e)=>{
            console.log('error is', e);
        })
    }
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
                                <input type="text" onChange={(e)=>setData(e.target.value, 'name')} value={name} onKeyPress={()=>handleEmailKeyPress('name')}/>
                                <label>Enter your Name</label>
                            </div>
                            <div className="inputForm">
                                <input id="email" type="eamil" onChange={(e)=>setData(e.target.value, 'email')} value={email} onKeyPress={()=>handleEmailKeyPress('email')}/>
                                <label>Enter your email id</label>
                            </div>
                            <div className="inputForm">
                                <input id="phone" type="number" onChange={(e)=>setData(e.target.value, 'phone')} value={phone} onKeyPress={()=>handleEmailKeyPress('phone')}/>
                                <label>Enter your contact number </label>
                            </div>
                            <div className="inputForm">
                                <textarea id="message" className="customTextArea" onChange={(e)=>setData(e.target.value, 'message')} value={message} onKeyPress={()=>handleEmailKeyPress('message')}></textarea>
                                <label>Enter your message</label>
                            </div>
                            <button className="submitBtn" onClick={saveData}>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default ContactForm