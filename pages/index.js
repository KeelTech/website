import CheckEligibility from '@/components/CheckEligibility';
import ImmigrationInfo from '@/components/ImmigrationInfo';
import CRSScore from '@/components/CRSScore';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';

const HomeView = ()=>{
    return <>
        <CheckEligibility />
        <ImmigrationInfo/>
        <CRSScore/>
        <Testimonials/>
        <ContactForm />
    </>
}

export default HomeView;