import GetConsultationCTA from '@/components/GetConsultationCTA';
import CommunityForm from '@/components/Forms/CommunityForm';

const Community = () => {

    return (
        <>
            <section className="studyBannerSection">
                <div className="container">
                    <div className="studyBannerCont noRevrsMob">
                        <div className="stdyBanText">
                            <h1>Join the World’s World’s Largest Student Community!
                            </h1>
                            <ul className="ieltsListBan">
                                <li> <img className="img-fluid" src="/assets/lstChk.svg" />Mentoring</li>
                                <li> <img className="img-fluid" src="/assets/lstChk.svg" />Profile Building</li>
                                <li> <img className="img-fluid" src="/assets/lstChk.svg" />Test Preparations</li>
                                <li> <img className="img-fluid" src="/assets/lstChk.svg" />End to End Visa Solutions</li>
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
                            <img className="img-fluid" src="/assets/feature-1.webp" />
                        </div>
                        <div className="storyContent pl-30">
                            <h4 className="grdHdng">FORUM</h4>
                            <h5>Enjoy the Power of Community</h5>
                            <p><b>“Alone we can do so little, together we can do so much.” – Helen Keller</b><br/>
                            When you lean on other people, you become better than you ever believed possible. Achieve everything you only imagined you could accomplish with a powerful student community.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="communitySection">
                <div className="container">
                    <div className="cmnuCont">
                        <div className="cmnuImgSec">
                            <img className="img-fluid" src="/assets/feature-2.webp" />
                        </div>
                        <div className="storyContent pl-30">
                            <h4 className="grdHdng">MENTORS</h4>
                            <h5>Career Guidance from the Top 1%</h5>
                            <p>No, you don’t need to be a student from the top 10 universities to achieve your dreams of being successful in your life. Get career guidance from mentors from Google, Uber, Microsoft and more.<br/>
                            Get mentored by people who made it to where you want to be.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="communitySection">
                <div className="container">
                    <div className="cmnuCont">
                        <div className="cmnuImgSec">
                            <img className="img-fluid" src="/assets/feature-3.webp" />
                        </div>
                        <div className="storyContent pl-30">
                            <h4 className="grdHdng">WORK HARD</h4>
                            <h5>We all take the Right Steps</h5>
                            <p>Start the journey towards your dream life today by taking all the necessary steps towards the right direction.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="communitySection">
                <div className="container">
                    <div className="cmnuCont">
                        <div className="cmnuImgSec">
                            <img className="img-fluid" src="/assets/feature-4.webp" />
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
                        <GetConsultationCTA text="Start your Journey"/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Community;
