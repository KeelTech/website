import PrivacyPage from '@/components/PrivacyPolicy';
import MetaTags from '@/components/MetaTags';

const metaInfo = {
    description: "Privacy Policy SECTION 1 – WHAT DO WE DO WITH YOUR INFORMATION? When you purchase something from our store, as part of the buying and selling process, we collect the personal information you give us such as your name, address and email address. When you browse our store, we also automatically receive your computer’s internet […]",
    title: 'Privacy Policy - Keel',
    ogDescription: "Privacy Policy SECTION 1 – WHAT DO WE DO WITH YOUR INFORMATION? When you purchase something from our store, as part of the buying and selling process, we collect the personal information you give us such as your name, address and email address. When you browse our store, we also automatically receive your computer’s internet […]",
    ogUrl: "https://getkeel.com/privacy-policy/"
}

const PrivacyView = ()=>{

    return(
        <>
            <MetaTags metaInfo={metaInfo}/>
            <PrivacyPage/>
        </>
       
    )
}

export default PrivacyView;