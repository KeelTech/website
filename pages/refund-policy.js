import RefundPage from '@/components/Refund';
import MetaTags from '@/components/MetaTags';

const metaInfo = {
    description: "Refund Policy The refund policy is based on the product/services that you buy from “GetKeel Migration Services Inc” and will be executed based on the terms of the contract you signed with getkeel Migration Services Inc. All requests will be entertained based on the terms of the contract only and unless until specified on the […]",
    title: 'Refund Policy - Keel',
    ogDescription: "Refund Policy The refund policy is based on the product/services that you buy from “GetKeel Migration Services Inc” and will be executed based on the terms of the contract you signed with getkeel Migration Services Inc. All requests will be entertained based on the terms of the contract only and unless until specified on the […]",
    ogUrl: "https://getkeel.com/refund-policy"
}
const RefundView = ()=>{

    return(
        <>
            <MetaTags metaInfo={metaInfo}/>
            <RefundPage/>
        </>
       
    )
}

export default RefundView;