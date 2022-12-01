import { useState } from 'react';

import PopupOverlay from '@/components/PopupOverlay';
import NumberVerification from '@/components/Forms/NumberVerification.js'

const GetConsultationCTA = () => {
    const [showPopup, setPopup] = useState(false);

    const handleClose = ()=>{
        setPopup(false)
    }
    return (
        <>
            <button onClick={() => setPopup(val => !val)}>Get Free Consultation now</button>
            <PopupOverlay showPopup={showPopup} handleCloseClick={handleClose}>
                <NumberVerification handleClose={handleClose}/>
            </PopupOverlay>
        </>
    )
}

export default GetConsultationCTA;