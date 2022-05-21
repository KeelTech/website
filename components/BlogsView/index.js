

import { container } from './style.js';

const Blogs = () => {

    return (
        <>
            <section className={container}>
                <div className="container">
                    <div className='blogsHeading'>
                        <h1>Our Blogs</h1>
                    </div>
                    <div className='blogsContainer'>
                        <div className='row'>
                            <div className='col-md-8 col-12'>
                                <div className='blogGrid'>
                                    {[...Array(30)].map(() => (
                                        <div className='blogCard'>
                                            <div className='blogImg'>
                                                <img className='img-fluid' src='https://getkeel.com/wp-content/uploads/2022/05/Untitled-design-3-1024x546.png' />
                                                <span>Canada Immigration</span>
                                            </div>
                                            <p>Know everything about Express Entry ahead of July 2022</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className='col-md-4 col-12 pl-web-40px'>
                                <div className='recentPost'>
                                    <h3>Recent Posts</h3>
                                    <div className="listRecent">
                                        <div className='postCard'>
                                            <p> Do I need a job offer to migrate to Canada? </p>
                                            <span>May 19, 2022 </span>
                                        </div>
                                        <div className='postCard'>
                                            <p> Do I need a job offer to migrate to Canada? </p>
                                            <span>May 19, 2022 </span>
                                        </div>
                                        <div className='postCard'>
                                            <p> Do I need a job offer to migrate to Canada? </p>
                                            <span>May 19, 2022 </span>
                                        </div>
                                    </div>
                                </div>
                                <div className='wantTravelTo'>
                                    <h2>Want to travel to Canada?</h2>
                                    <button>Check Eligibility</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blogs;