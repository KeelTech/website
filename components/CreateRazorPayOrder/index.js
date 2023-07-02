import { useState, forwardRef, useImperativeHandle } from 'react';

import PopupOverlay from '@/components/PopupOverlay';
import RazorPayForm from '@/components/Forms/RazorPayForm.js'

const CreateRazorPayOrder = forwardRef((props, ref) => {
    const { handleOrderCreateResponse, plan_id, handleClose } = props;

    // useImperativeHandle(ref, ()=>({
    //     openPopup: togglePopup
    // }))
    return (
        <>
            {/* {
                hideText?null:<button className={className} onClick={togglePopup}>{text?text:'Get Free Consultation now'}</button>
            } */}
            <PopupOverlay showPopup={true} handleCloseClick={handleClose} >
                <RazorPayForm handleClose={handleClose} plan_id={plan_id} handleOrderCreateResponse={handleOrderCreateResponse}/>
            </PopupOverlay>
        </>
    )
})

CreateRazorPayOrder.defaultProps = {
    ref: null,
    text: '',
    hideText: false,
    className: '',
    lead_origin:'web',
    isIeltsView: false
}

export default CreateRazorPayOrder;