import { useState, forwardRef, useImperativeHandle } from 'react';

import PopupOverlay from '@/components/PopupOverlay';
import NumberVerification from '@/components/Forms/NumberVerification.js'

const GetConsultationCTA = forwardRef((props, ref) => {
    const { text, hideText, className, lead_origin } = props;
    const [showPopup, setPopup] = useState(false);

    const handleClose = ()=>{
        setPopup(false)
    }

    const togglePopup = ()=>{
        setPopup(val => !val);
    }

    useImperativeHandle(ref, ()=>({
        openPopup: togglePopup
    }))
    return (
        <>
            {
                hideText?null:<button className={className} onClick={togglePopup}>{text?text:'Get Free Consultation now'}</button>
            }
            <PopupOverlay showPopup={showPopup} handleCloseClick={handleClose}>
                <NumberVerification handleClose={handleClose} lead_origin={lead_origin}/>
            </PopupOverlay>
        </>
    )
})

GetConsultationCTA.defaultProps = {
    ref: null,
    text: '',
    hideText: false,
    className: '',
    lead_origin:'web'
}

export default GetConsultationCTA;