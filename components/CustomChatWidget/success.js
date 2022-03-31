const SuccessModal = () => {

    const mainPaymentModal = () => {
        window.open('/', '_self');
    }

    return (
        <div className="commonPopUpOverlay">
            <div className="commonPopUpConten chatCustomPop">
                <img className="closePop" src={"/images/x.svg"} alt="time" onClick={mainPaymentModal} />
                <div className="popCntrImg">
                    <img src={"/images/right.svg"} alt="time" />
                </div>
                <p>We’ve sucessfully received your response</p>
                <p className="popSubPera">Redirect to homepage to access the service right now</p>
                <div className="popBtn">
                    <button className="ProceedBtnPop" onClick={mainPaymentModal}>Proceed To Dashboard</button>
                </div>
            </div>
        </div>
    )
}

export default SuccessModal;