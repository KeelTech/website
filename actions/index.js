import { API_GET, API_POST } from './api.js';
import { API_END_POINT } from './constant.js';

export const createLead = (data)=>{
    return API_POST(`${API_END_POINT}/web/home-lead`, data);
}

export const contactWebsite = (data)=>{
    return API_POST(`${API_END_POINT}/web/website-contact`, data);
}

export const getQuestions = (data={}, cb)=>{
    API_GET(`${API_END_POINT}/questionnaire/get-questions?is_active=true`, data).then((response)=>{
        if(response && response.status==1){
            if(cb) cb(response.data, null)
        }
    })
}

export const submitQuestions = (data, cb)=>{
    return API_POST(`${API_END_POINT}/questionnaire/submit-questionnaires`, data).then((response)=>{
        if(cb)cb(response);
    }).catch((e)=>{
        if(cb) cb(null, true);
    })
}

export const getPlans = (data={}, cb)=>{
    return API_GET(`${API_END_POINT}/plans/list-plans`, data).then((response)=>{
        if(response && response.status==1){
            if(cb) cb(response.data||[], null)
            return response.data||[]
        }
        return []
    })
}

export const handleCheckout = (data={}, cb)=>{
    return API_POST(`${API_END_POINT}/payment/create-order-details`, data).then((response)=>{
        if(response && response.status==1){
            if(cb) cb(response.data||[], null)
            return response.data||{}
        }else{
            if(cb)cb(null, true)
        }
        return []
    })
}

export const getPlanDetail = (dataParams, cb=null)=>{
    const { id } = dataParams;
    API_GET(`${API_END_POINT}/plans/plan-details/${id}`).then((response)=>{
        
        if(response && response.status==1){
            if(cb)cb(response.data||{}, null);
        }else{
            if(cb)cb(null, true);
        }
        
    }).catch((e)=>{
        if(cb)cb(null, true);
    })
}

export const caputrePayment = (data={}, cb)=>{
    return API_POST(`${API_END_POINT}/payment/capture-payment`, data).then((response)=>{
        if(response && response.status==1){
            if(cb) cb(response.data||{}, null)
            return response.data||{}
        }else{
            if(cb)cb(null, true)
        }
        return []
    })
}

export const getActiveComponents = (dataParams={}, cb=null)=>{
    return API_GET(`${API_END_POINT}/web/website-components`).then((response)=>{
        return response;        
    }).catch((e)=>{
        if(cb)cb(null, true);
    })
}

export const getBlogsList = (dataParams={}, cb=null)=>{
    return API_GET(`${API_END_POINT}/web/blog-list`).then((response)=>{
        return response;        
    }).catch((e)=>{
        if(cb)cb(null, true);
    })
}

export const getBlogDetail = (dataParams={}, cb=null)=>{
    const { id } = dataParams;
    return API_GET(`${API_END_POINT}/web/blog-list/${id}`).then((response)=>{
        return response; 
    }).catch((e)=>{
        if(cb)cb(null, true);
    })
}

export const sendOTP = (dataParams, cb=null)=>{
    API_POST(`${API_END_POINT}/user/otp/generate`,
        dataParams
    ).then((response)=>{
        console.log("response", response);
        if(cb)cb(response, null);
    }).catch((e)=>{
        if(cb)cb(null, true);
    })
  }
  
  export const verifyOTP = (dataParams, cb=null)=>{
    API_POST(`${API_END_POINT}/user/otp/verify`,
        dataParams
    ).then((response)=>{
        if(cb)cb(response, null);
    }).catch((e)=>{
        if(cb)cb(null, true);
    })
  }

  export const createLeadSquareLead = (dataParams, cb=null, headers)=>{
    const { accessKey, secretKey, payload } = dataParams;
    return API_POST(`https://asyncapi-in21.leadsquared.com/lead/capture?accessKey=${accessKey}&secretKey=${secretKey}`,
        payload,
        headers
    )
  }