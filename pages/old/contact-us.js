import ContactView from '@/components/ContactView';
import MetaTags from '@/components/MetaTags';

const metaInfo = {
    description: "Keel helps you in finding the licensed Canada Immigration Lawyer for you via our end to end application management platform.",
    title: 'Contact Us | Find a Canada Immigration Lawyer Near You | Keel',
    ogDescription: "Keel helps you in finding the licensed Canada Immigration Lawyer for you via our end to end application management platform.",
    ogUrl: "https://getkeel.com/contact-us/"
}

const Contact = ()=>{

    return(
        <>
            <MetaTags metaInfo={metaInfo}/>
            <ContactView/>
        </>
    )
}

export default Contact;