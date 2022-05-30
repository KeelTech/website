import { useMemo } from 'react';
import { useAppContext } from '@/context/index.js';
import ContactForm from '@/components/ContactForm';

import { contactSection } from './style.js';

const Contact = () => {
    const { activeComponents } = useAppContext();

    const renderContactUsText = useMemo(()=>{
        const widgetText = activeComponents?.filter(x=>x.id===1);
        if(widgetText.length){
            const { title, body } = widgetText[0];
            return {
                title,
                body
            }
        }
        return {
            title:'Contact Us',
            body: 'Please contact us for more Details'
        }
        
    },[activeComponents])

    return (
        <section className={contactSection}>
            <div className="container">
                <div className="contactContainer">
                    <div className="contactMainHeading">
                        <h2>{renderContactUsText.title}</h2>
                    </div>
                    <div className="row vr-gap-30">
                        <div className="col-md-6 col-12">
                            <div className="getInTouch">
                                <h4>GET IN TOUCH </h4>
                                <p dangerouslySetInnerHTML={{__html: renderContactUsText.body}}></p>
                                <h4>SAY G’DAY
                                </h4>
                                <h5>hello@getkeel.com
                                    <br /> +1-416-277-5284
                                    <br /> +91-9810206875
                                </h5>
                            </div>
                        </div>
                        <div className="col-md-6 col-12 customFormIn">
                            <ContactForm />

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;