import { useState } from 'react';

import PopupOverlay from '@/components/PopupOverlay';
import NumberVerification from '@/components/Forms/NumberVerification.js'

const GetConsultationCTA = ({text}) => {
    const [showPopup, setPopup] = useState(false);

    const handleClose = ()=>{
        setPopup(false)
    }
    return (
        <>
            <button onClick={() => setPopup(val => !val)}>{text?text:'Get Free Consultation now'}</button>
            <PopupOverlay showPopup={showPopup} handleCloseClick={handleClose}>
                <NumberVerification handleClose={handleClose}/>
            </PopupOverlay>
        </>
    )
}

export default GetConsultationCTA;