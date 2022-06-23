import Services from '@/components/Services';
import CanadaImmigration from '@/components/CanadaImmigration';
import MetaTags from '@/components/MetaTags';

const metaInfo = {
    description: 'Keel is a platform where we connect you with Licensed Consultants who helps you with legal services on Canada Immigration.',
    title: 'Canada Immigration Services | Only Licensed Consultants | Keel',
    ogDescription: "Keel is a platform where we connect you with Licensed Consultants who helps you with legal services on Canada Immigration.",
    ogUrl: "https://getkeel.com/services"
}

const ServiceView = ()=>{

    return(
        <>
            <MetaTags metaInfo={metaInfo}/>
            <Services/>
            <CanadaImmigration/>
        </>
    )
}

export default ServiceView;