import TermsPage from '@/components/TermsCondition';
import MetaTags from '@/components/MetaTags';

const metaInfo = {
    description: "Terms & Conditions OVERVIEW This website is operated by Keel Inc.. Throughout the site, the terms “we”, “us” and “our” refer to Keel Inc.. Keel Inc. offers this website, including all information, tools and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated […]",
    title: 'Terms and Conditions - Keel',
    ogDescription: "Terms & Conditions OVERVIEW This website is operated by Keel Inc.. Throughout the site, the terms “we”, “us” and “our” refer to Keel Inc.. Keel Inc. offers this website, including all information, tools and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated […]",
    ogUrl: "https://getkeel.com/terms-and-conditions/"
}

const TermsView = ()=>{

    return(
        <>
            <MetaTags metaInfo={metaInfo}/>
            <TermsPage/>
        </>
       
    )
}

export default TermsView;