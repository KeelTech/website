import GetConsultationCTA from '@/components/GetConsultationCTA';
import CommunityForm from '@/components/Forms/CommunityForm';

const Community = () => {

    return (
        <>
            <section className="studyBannerSection">
                <div className="container">
                    <div className="studyBannerCont noRevrsMob">
                        <div className="stdyBanText">
                            <h1>Join the World’s Largest Student Community!
                            </h1>
                            <ul className="ieltsListBan">
                                <li> <img className="img-fluid" src="/assets/lstChk.svg" alt='check icon' />Mentoring</li>
                                <li> <img className="img-fluid" src="/assets/lstChk.svg" alt='check icon' />Profile Building</li>
                                <li> <img className="img-fluid" src="/assets/lstChk.svg" alt='check icon' />Test Preparations</li>
                                <li> <img className="img-fluid" src="/assets/lstChk.svg" alt='check icon' />End to End Visa Solutions</li>
                            </ul>
                        </div>
                        <CommunityForm/>
                    </div>
                </div>
            </section>
            <section className="communitySection">
                <div className="container">
                    <div className="cmnuCont">
                        <div className="cmnuImgSec">
                            <img className="img-fluid" src="/assets/feature-1.webp" alt='feature' />
                        </div>
                        <div className="storyContent pl-30">
                            <h4 className="grdHdng">FORUM</h4>
                            <h5>Enjoy the Power of Community</h5>
                            <p>Showcase your achievements directly to the universities and be a part of the largest community of students. Connect with like-minded students and explore path-breaking experiences to navigate your career.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="communitySection">
                <div className="container">
                    <div className="cmnuCont">
                        <div className="cmnuImgSec">
                            <img className="img-fluid" src="/assets/feature-2.webp" alt='feature' />
                        </div>
                        <div className="storyContent pl-30">
                            <h4 className="grdHdng">MENTORS</h4>
                            <h5>Career Guidance from the Top 1%</h5>
                            <p>Get mentored by world’s leading industry experts like Uber, Microsoft, Deloitte and more. An exclusive opportunity to learn from their experiences and build a framework that will match your dream career.<br/>
                            Get mentored by people who made it to where you want to be.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="communitySection">
                <div className="container">
                    <div className="cmnuCont">
                        <div className="cmnuImgSec">
                            <img className="img-fluid" src="/assets/feature-3.webp" alt='feature' />
                        </div>
                        <div className="storyContent pl-30">
                            <h4 className="grdHdng">WORK HARD</h4>
                            <h5>Take the Right Steps</h5>
                            <p>Miss no necessary steps towards your goal. With our highly qualified mentors, you’ll have a stepwise-guide to approach the universities. This will help in covering all the aspects of your application and doing everything you possibly can.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="communitySection">
                <div className="container">
                    <div className="cmnuCont">
                        <div className="cmnuImgSec">
                            <img className="img-fluid" src="/assets/feature-4.webp" alt='feature' />
                        </div>
                        <div className="storyContent pl-30">
                            <h4 className="grdHdng">ACHIEVE</h4>
                            <h5>Profile that gets you the Attention</h5>
                            <p><b>Imagine</b> with all your mind.<br/>
                            <b>Believe</b> with all your heart.<br/>
                            <b>Achieve</b> with all your might.<br/>
                            We help you tell the story of how amazing you are!</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="careerFull">
                <div className="container">
                    <div className="crerGrid">
                        <p>“Knowledge Is Power. <br/>” Community Is Strength.</p>
                        <GetConsultationCTA text="Start your Journey" lead_origin='study'/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Community;
