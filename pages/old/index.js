import MetaTags from '@/components/MetaTags';
import CheckEligibility from '@/components/CheckEligibility';
import ImmigrationInfo from '@/components/ImmigrationInfo';
import CRSScore from '@/components/CRSScore';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';

const metaInfo = {
    description: 'Looking for the Best Canadian Immigration Consultants? We are here to help and support you throughout the immigration process',
    title: 'Keel connects you only with Licensed Consultants for Canada Immigration',
    ogDescription: "Looking for the Best Canadian Immigration Consultants? We are here to help and support you throughout the immigration process",
    ogUrl: "https://getkeel.com/"

}
const HomeView = ()=>{
    return <>
        <MetaTags metaInfo={metaInfo}/>
        
        <CheckEligibility />
        <ImmigrationInfo/>
        <CRSScore/>
        <Testimonials/>
        <ContactForm />
    </>
}

export default HomeView;