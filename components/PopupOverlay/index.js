import { useEffect } from 'react';

const PopupOverlay = ({ handleCloseClick=()=>{}, showPopup=false, children=<></> })=>{

    useEffect(()=>{
        if(showPopup){
            document.body.style.overflow ="hidden";
        }

        return ()=>{
            if(showPopup){
                document.body.style.overflow ="";
            }
        }
    },[showPopup])

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
