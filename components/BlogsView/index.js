

import { useRouter } from 'next/router';

import { container } from './style.js';

const Blogs = ({ data }) => {
    const router = useRouter()
    return (
        <>
            <section className={container}>
                <div className="container">
                    <div className='blogsHeading'>
                        <h1>Our Blogs</h1>
                    </div>
                    <div className='blogsContainer'>
                        <div className='recentMobile'>
                            {/* <h3>Recent Posts</h3> */}
                            <div className='recntSlideMain'>
                                {data.map((val, key) => {
                                    const { blog_img, title, id } = val;
                                    return <div className='slideCards' key={key} onClick={() => router.push(`/blogs/${id}`)}>
                                        <img className='img-fluid' src={blog_img} alt="blog" />
                                        <p>{title}</p>
                                    </div>
                                })}
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-8 col-12'>
                                <div className='blogGrid'>
                                    {data.map((val, key) => {
                                        const { blog_img, title, id,created_at } = val;
                                        return <div className='blogCard' key={key} onClick={() => router.push(`/blogs/${id}`)}>
                                            <div className='blogImg'>
                                                <img className='img-fluid' src={blog_img} alt="title" />
                                                {/* <span>Canada Immigration</span> */}
                                            </div>
                                            <p>{title}
                                            <span className='createdTIme'>
                                                {created_at}</span>
                                            </p>    
                                        </div>
                                    })}
                                </div>
                            </div>
                            <div className='col-md-4 col-12 pl-web-40px'>
                                {
                                    data.length ?
                                        <div className='recentPost'>
                                            <h3>Recent Posts</h3>
                                            <div className="listRecent">
                                                {
                                                    data.slice(0, 3).map((val, key) => {
                                                        const { title, created_at } = val;
                                                        return <div className='postCard' key={key}>
                                                            <p>{title}</p>
                                                            {
                                                                created_at ? <span>{created_at}</span> : null
                                                            }
                                                        </div>
                                                    })
                                                }
                                            </div>
                                        </div>
                                        : null
                                }
                                <div className='wantTravelTo'>
                                    <h2>Want to travel to Canada?</h2>
                                    <button onClick={() => router.push('/eligibility')}>Check Eligibility</button>
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