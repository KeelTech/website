import React from 'react';
import { useRouter } from "next/router";

const PaymentFailureModal = ()=>{
    var router = useRouter();

    const mainPaymentModal = ()=>{
        router.push('/keel-study-in-abroad-program');
    }

    return(
        <div className="commonPopUpOverlay">
            <div className="commonPopUpConten">
                {/* <img className="closePop" src={"/assets/x.svg"} alt="time" onClick={mainPaymentModal}/> */}
                <div className="popCntrImg">
                <img src={"/assets/wrong.svg"} alt="time" />
                </div>
                <p>Failed</p>
                {/* <p className="popSubPera">Redirect to homepage to access the service right now</p> */}
                <div className="popBtn">
                    <button className="ProceedBtnPop" onClick={mainPaymentModal}>Proceed To Payment</button>
                </div>
            </div>
        </div>
    )
}

export default PaymentFailureModal;