import { API_POST } from './api.js';
import { API_END_POINT } from './constant.js';

export const createLead = (data)=>{
    return API_POST(`${API_END_POINT}/web/home-lead`, data);
}

export const contactWebsite = (data)=>{
    return API_POST(`${API_END_POINT}/web/website-contact`, data);
}