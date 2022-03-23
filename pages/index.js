import Header from '../components/Header';
import CheckEligibility from '../components/CheckEligibility';
import ImmigrationInfo from '../components/ImmigrationInfo';
import CRSScore from '../components/CRSScore';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const HomeView = ()=>{
    return <>
        <Header />
        <CheckEligibility />
        <ImmigrationInfo/>
        <CRSScore/>
        <Testimonials/>
        <ContactForm />
        <Footer/>
    </>
}

export default HomeView;