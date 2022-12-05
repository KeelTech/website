import AboutPage from '@/components/AboutUs';
import MetaTags from '@/components/MetaTags';

const metaInfo = {
    description: "About Us We are an immigration tech startup set to disrupt the $2 Billion+ immigration industry in India. We are building a true immigration tech platform that provides the easiest and most straightforward way for people to migrate to any country in the world. Think of us as Uber for the global migration industry. We […]",
    title: 'About - Keel',
    ogDescription: "About Us We are an immigration tech startup set to disrupt the $2 Billion+ immigration industry in India. We are building a true immigration tech platform that provides the easiest and most straightforward way for people to migrate to any country in the world. Think of us as Uber for the global migration industry. We […]",
    ogUrl: "https://getkeel.com/about/"
}

const AboutView = ()=>{

    return(
        <>
            <MetaTags metaInfo={metaInfo}/>
            <AboutPage/>
        </>
       
    )
}

export default AboutView;