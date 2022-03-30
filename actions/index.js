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