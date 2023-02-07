import { useRouter } from 'next/router';
import Head from 'next/head'
import { getBlogsList } from '@/actions/index.js';

const Resource = ({ blogsList }) => {
    const router = useRouter()

    const blogData = blogsList?.data ?? [];
    console.log("blogData", blogData);
    return (
        <>
        <Head>
                <title>Blogs - Keel | Best canadian immigration consultants </title>
                <meta content="Best agency for Canada immigration |  Through our blogs, learn more about immigration, study, and other visas for countries across the world | Keel" key="title" />
            </Head>
            <section className="studyBannerSection">
                <div className="container">
                    <div className="studyBannerCont">
                        <div className="stdyBanText">
                            <h1>One stop destination for all your
                                <span> Immigration Queries</span>
                            </h1>
                            <p>Keel is there to help you every step of the way from the day you think of settling abroad till the time you actually start your brand new life</p>
                            {/* <button>Explore Resources</button> */}
                        </div>
                        <div className="studyBanImg">
                            {/* <img className="img-fluid" src="/assets/studyabroad.webp" /> */}
                            <img className="img-fluid" src="/assets/recs.webp" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="resourceSection">
                <div className="container">
                    <div className="resrcCont">
                        <div className="storyContent full-width">
                            <h4 className="grdHdng">Blogs</h4>
                            <div className="subheadWithBtn">
                                {/* <h5>Latest <span>Blogs</span></h5> */}
                                {/* <button>See All <img className="img-fluid" src="/assets/arrowDark.svg"/></button> */}
                            </div>
                            <p>Check out our blogs here</p>
                        </div>
                        <div className="blogGridsSection newBlogSection">
                            {
                                blogData.map((val, key) => {
                                    const { blog_img, title, id } = val;
                                    return <div className="blogGrid newWebBlog" key={key} onClick={() => router.push(`/blogs/${id}`)}>
                                        <img className="img-fluid" src={blog_img} />
                                        <div className="rescGrdData">
                                            {/* <span>Canada</span> */}
                                            <p className='dateCust'>Date</p>
                                            <p>{title}</p>
                                        </div>
                                    </div>
                                })
                            }

                            {/* <div className="blogGrid">
                        <img className="img-fluid" src="/assets/resc.webp"/>
                        <div className="rescGrdData">
                            <span>Canada</span>
                            <p>10 Reasons Moving To Canada Can Change Your Life For Good</p>
                        </div>
                    </div>
                    <div className="blogGrid">
                        <img className="img-fluid" src="/assets/resc.webp"/>
                        <div className="rescGrdData">
                            <span>Canada</span>
                            <p>10 Reasons Moving To Canada Can Change Your Life For Good</p>
                        </div>
                    </div>
                    <div className="blogGrid">
                        <img className="img-fluid" src="/assets/resc.webp"/>
                        <div className="rescGrdData">
                            <span>Canada</span>
                            <p>10 Reasons Moving To Canada Can Change Your Life For Good</p>
                        </div>
                    </div> */}
                        </div>
                    </div>
                </div>
            </section>
            <section className="resourceSection d-none">
                <div className="container">
                    <div className="resrcCont">
                        <div className="storyContent full-width">
                            <h4 className="grdHdng">News</h4>
                            <div className="subheadWithBtn">
                                <h5>Immigration <span>News</span></h5>
                                {/* <button>See All <img className="img-fluid" src="/assets/arrowDark.svg"/></button> */}
                            </div>
                            <p>We believe with right exposure you can do wonders for yourself and<br /> your family hence we help you make choices that</p>
                        </div>
                        <div className="blogGridsSection">
                            {
                                blogData.map((val, key) => {
                                    const { blog_img, title, id } = val;

                                    return <div className="blogGrid" onClick={() => router.push(`/blogs/${id}`)} key={key}>
                                        <img className="img-fluid" src={blog_img} />
                                        <div className="rescGrdData">
                                            <span>Canada</span>
                                            <p>{title}</p>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
            <section className="resourceSection d-none">
                <div className="container">
                    <div className="resrcCont">
                        <div className="storyContent full-width">
                            <h4 className="grdHdng">Guides</h4>
                            <div className="subheadWithBtn">
                                <h5>Keel <span>Guides</span></h5>
                                <button>See All <img className="img-fluid" src="/assets/arrowDark.svg" /></button>
                            </div>
                            <p>We believe with right exposure you can do wonders for yourself and your family hence we help you make choices that</p>
                        </div>
                        <div className="serviceSlider customGrdnGrids">
                            <div className="srvcGrid">
                                <img className="img-fluid keelWhiteLog" src="/assets/keelWhite.svg" />
                                <h5>Cost of Studying in Canada</h5>
                                {/* <!-- <button>Know more<img className="img-fluid" src="/assets/arrow.svg"></button> --> */}
                            </div>
                            <div className="srvcGrid grdntTwo">
                                <img className="img-fluid keelWhiteLog" src="/assets/keelWhite.svg" />
                                <h5>Cost of Studying in Canada</h5>
                                {/* <!-- <button>Know more<img className="img-fluid" src="/assets/arrow.svg"></button> --> */}
                            </div>
                            <div className="srvcGrid gdntThird">
                                <img className="img-fluid keelWhiteLog" src="/assets/keelWhite.svg" />
                                <h5>Cost of Studying in Canada</h5>
                                {/* <!-- <button>Know more<img className="img-fluid" src="/assets/arrow.svg"></button> --> */}
                            </div>
                            <div className="srvcGrid">
                                <img className="img-fluid keelWhiteLog" src="/assets/keelWhite.svg" />
                                <h5>Cost of Studying in Canada</h5>
                                {/* <!-- <button>Know more<img className="img-fluid" src="/assets/arrow.svg"></button> --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <section className="followUsSection">
                <div className="container">
                    <div className="storyContent full-width text-center">
                        <h4 className="grdHdng">Follow us on</h4>
                        <h5>Insta<span>gram</span></h5>
                    </div>
                </div>
                <div className="followUsContImg">
                    <ul>
                        <li><a href=""><img src="/assets/fl3.webp" alt="" /></a></li>
                        <li><a href=""><img src="/assets/fl2.webp" alt="" /></a></li>
                        <li><a href=""><img src="/assets/fl3.webp" alt="" /></a></li>
                        <li><a href=""><img src="/assets/fl4.webp" alt="" /></a></li>
                        <li><a href=""><img src="/assets/fl5.webp" alt="" /></a></li>
                        <li><a href=""><img src="/assets/fl6.webp" alt="" /></a></li>
                        <li><a href=""><img src="/assets/fl7.webp" alt="" /></a></li>
                        <li><a href=""><img src="/assets/fl8.webp" alt="" /></a></li>
                    </ul>
                </div>
            </section> */}
        </>
    )
}

export async function getServerSideProps() {
    const blogsList = await getBlogsList({})
    return {
        props: {
            blogsList
        }
    }
}

export default Resource;
