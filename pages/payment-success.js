import React from 'react';
import { useRouter } from "next/router";

const PaymentSuccessModal = ()=>{
    var router = useRouter();
    const mainPaymentModal = ()=>{
        window.open('https://app.getkeel.com');
    }
    return(
        <div className="commonPopUpOverlay">
            <div className="commonPopUpConten">
                {/* <img className="closePop" src={"/assets/x.svg"} alt="time" onClick={mainPaymentModal}/> */}
                <div className="popCntrImg">
                <img src={"/assets/right.svg"} alt="time" />
                </div>
                <p>We’ve sucessfully received your payment</p>
                <p className="popSubPera">Redirect to homepage to access the service right now</p>
                <div className="popBtn">
                    <button className="ProceedBtnPop" onClick={mainPaymentModal}>Proceed To Dashboard</button>
                </div>
            </div>
        </div>
    )
}

export default PaymentSuccessModal;