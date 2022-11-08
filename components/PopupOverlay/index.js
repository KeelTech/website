const PopupOverlay = ({ handleCloseClick=()=>{}, showPopup=false, children=<></> })=>{

    return(
        <div className={`commonPopUpOverlay ${showPopup?'':'d-none'}`}>
                
            <div className="commonPopUpConten">
                <img className="closePop" src={"/images/crossIcon.svg"} alt="time" onClick={handleCloseClick}/>
                {children}
            </div>
        </div>
    )
}

export default PopupOverlay;
