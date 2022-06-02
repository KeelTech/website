import { useMemo } from 'react';
import { useAppContext } from '@/context/index.js';

import { container } from './style.js';

const Testimonials = ()=>{
    const { activeComponents } = useAppContext();

    const renderWidget = useMemo(()=>{
        const widgetText = activeComponents?.filter(x=>x.id===2);
        if(widgetText.length){
            const { title, body, is_active } = widgetText[0];
            if(is_active){
                return {
                    title,
                    body
                }
            }
            return {
                body:'All in one application management platform is a dream come true. Used this for my brother. Wish I had this when I was trying to immigrate. Love the service! ',
                title: "TESTIMONIALS"
            }
        }
        return {
            body:'All in one application management platform is a dream come true. Used this for my brother. Wish I had this when I was trying to immigrate. Love the service! ',
            title: "TESTIMONIALS"
        }
    },[activeComponents])
    return(
    <>
    {
        renderWidget.title && renderWidget.body?
        <section className={container}>
        <div className="container">
            <div className="testiMainCont">
                <div className="row">
                    <div className="col-md-6 col-12">
                        <div className="testLeftHed">
                            <h5>{renderWidget.title}</h5>
                            <h4>Here's what our customers have to say.</h4>
                        </div>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="testimSlder">
                            <div className="testiMoCard">
                                <p dangerouslySetInnerHTML={{__html: renderWidget.body}}></p>
                                    <div className="testiUsr">
                                        <img className="img-fluid"
                                            src="https://getkeel.com/wp-content/uploads/2021/05/close-up-handsome-male-fashion-model-face-with-bea-DCZ9NLF.jpg" />
                                        <p>Maddy</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
        :null
    }
    </>
    )
}

export default Testimonials;