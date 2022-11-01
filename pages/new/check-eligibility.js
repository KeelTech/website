import EligibilityView from '@/components/EligibilityView/new.js';
import MetaTags from '@/components/MetaTags';

const metaInfo = {
    description: "Calculate your CRS score for Express Entry with our automated CRS Calculator. It will determine your eligibility for Canada's Express Entry.",
    title: 'Check your Eligibility for Canada Immigration | CRS Calculator | Keel',
    ogDescription: "Calculate your CRS score for Express Entry with our automated CRS Calculator. It will determine your eligibility for Canada's Express Entry.",
    ogUrl: "https://getkeel.com/check-eligibility"
}

const Eligibility = ()=>{

    return(
        <>
            <MetaTags metaInfo={metaInfo}/>
            <EligibilityView/>
        </>
        
    )
}


export default Eligibility;