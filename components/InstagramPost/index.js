import InstagramEmbed from 'react-instagram-embed';
import { INSTAGRAM_POST_DATA } from '@/helpers/constant';

const InstaPost = ()=>{

    return(
        <section className="followUsSection">
            <div className="container">
                <div className="storyContent full-width text-center">
                    <h4 className="grdHdng">Follow us on</h4>
                    <h5>Insta<span>gram</span></h5>
                </div>
            </div>
            <div className="followUsContImg">
                <ul>
                    {/* {
                        INSTAGRAM_POST_DATA
                    }
                    <li><a href=""><img src="/assets/fl3.webp" alt="" /></a></li>
                    <li><a href=""><img src="/assets/fl2.webp" alt="" /></a></li>
                    <li><a href=""><img src="/assets/fl3.webp" alt="" /></a></li>
                    <li><a href=""><img src="/assets/fl4.webp" alt="" /></a></li>
                    <li><a href=""><img src="/assets/fl3.webp" alt="" /></a></li>
                    <li><a href=""><img src="/assets/fl4.webp" alt="" /></a></li> */}
                    <li>
                        <InstagramEmbed
                            url={INSTAGRAM_POST_DATA[0]}
                            clientAccessToken='3326419574247003|c4ad1a54b46e47fd896a76d1d7903fa5'
                            maxWidth={320}
                            hideCaption={false}
                            containerTagName='a'
                            protocol=''
                            injectScript
                            onLoading={() => {}}
                            onSuccess={() => {}}
                            onAfterRender={() => {}}
                            onFailure={() => {}}
                        />
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default InstaPost;