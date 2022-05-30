import { container } from './style.js';

const BlogsDet = ({ blogData }) => {
    const { body } = blogData||{}
    return (
        <section className={container}>
            <div className="container">
                <div className='blogDetailsCont'>
                    <div className='blogImgDataCont'></div>
                    {
                        body?<div dangerouslySetInnerHTML={{ __html: body }}></div>:null
                    }
                </div>
            </div>
        </section>
    )

    // return (
    //     <>
    //         <section className={container}>
    //             <div className="container">
    //                 <div className='blogDetailsCont'>
    //                     <div className='blogImgDataCont'>
    //                         <img className='img-fluid' src='https://getkeel.com/wp-content/uploads/2022/05/Untitled-design-3-1024x546.png' />
    //                         <div className='imgDtsl'>
    //                             <p>May 16 2022</p>
    //                             <div className='socialBlog'>
    //                                 <div>
    //                                     <Link href="https://www.instagram.com/getkeelinc/">
    //                                         <svg width="25" height="25" viewBox="0 0 25 25" fill="none"
    //                                             xmlns="http://www.w3.org/2000/svg">
    //                                             <path
    //                                                 d="M17.3306 2.35254H7.33057C4.56914 2.35254 2.33057 4.59112 2.33057 7.35254V17.3525C2.33057 20.114 4.56914 22.3525 7.33057 22.3525H17.3306C20.092 22.3525 22.3306 20.114 22.3306 17.3525V7.35254C22.3306 4.59112 20.092 2.35254 17.3306 2.35254Z"
    //                                                 stroke="#292d34" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    //                                             </path>
    //                                             <path
    //                                                 d="M16.3308 11.7226C16.4542 12.5548 16.312 13.4048 15.9245 14.1516C15.537 14.8984 14.9239 15.504 14.1724 15.8823C13.4209 16.2605 12.5692 16.3922 11.7385 16.2585C10.9079 16.1249 10.1405 15.7327 9.5456 15.1378C8.95068 14.5428 8.55849 13.7755 8.42483 12.9448C8.29116 12.1141 8.42283 11.2625 8.80109 10.511C9.17935 9.75945 9.78495 9.14634 10.5317 8.75884C11.2785 8.37134 12.1285 8.22918 12.9608 8.3526C13.8097 8.47848 14.5956 8.87406 15.2025 9.4809C15.8093 10.0877 16.2049 10.8737 16.3308 11.7226Z"
    //                                                 stroke="#292d34" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    //                                             </path>
    //                                             <path d="M17.8306 6.85254H17.8406" stroke="#292d34" strokeWidth="2"
    //                                                 strokeLinecap="round" strokeLinejoin="round"></path>
    //                                         </svg>
    //                                     </Link>
    //                                 </div>
    //                                 <div>
    //                                     <Link href="https://www.facebook.com/getkeelinc">
    //                                         <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
    //                                             xmlns="http://www.w3.org/2000/svg">
    //                                             <path
    //                                                 d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
    //                                                 stroke="#292d34" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    //                                             </path>
    //                                         </svg>
    //                                     </Link>
    //                                 </div>
    //                                 <div>
    //                                     <Link href="https://ca.linkedin.com/company/getkeel">
    //                                         <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
    //                                             xmlns="http://www.w3.org/2000/svg">
    //                                             <path
    //                                                 d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8V8Z"
    //                                                 stroke="#292d34" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    //                                             </path>
    //                                             <path d="M6 9H2V21H6V9Z" stroke="#292d34" strokeWidth="2" strokeLinecap="round"
    //                                                 strokeLinejoin="round"></path>
    //                                             <path
    //                                                 d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
    //                                                 stroke="#292d34" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    //                                             </path>
    //                                         </svg>
    //                                     </Link>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div>
    //                     <div className='blogData'>
    //                         <h3>Know Everything About Express Entry Ahead Of July 2022</h3>
    //                         <div class="blog-data-container">
    //                             <p>As announced by the Canadian Immigration Minister in April 2022, Express Entry for Federal Skilled Worker Program (FWSP) and Canadian Experience Class (CEC) is resuming from July 2022.</p>
    //                             <p>So, here is everything you need to know to stay ahead in the game and get your ITA in July. Yes, you heard me right.</p>
    //                             <p>When we are saying Express Entry is resuming in July, we mean the draws will start to happen from July onwards. So now is the time to start preparing for IELTS, file your Canada PR application in the Express Entry pool so that your chances of landing in Canada by the year-end or next year starting increases manifold.&nbsp;</p>
    //                             <p>We all know, that due to the piling applications during the Pandemic, the IRCC put a halt on many popular immigration programs. Federal Skilled Worker Program (FWSP), for instance, has been the most popular program for 50 years in immigration attracting thousands of skilled workers or professionals towards the labor market of Canada.</p>
    //                             <p>But this halt had its own consequences. Canada’s unemployment rate is at an all-time low and there is a high number of job vacancies waiting to be filled by skilled professionals. Right now, the topmost priority for the Canadian government is to reopen the country to all the skilled workers and professionals. This move will boost the economy of the country and will bridge the gap between demand and supply in the labor market.&nbsp;</p>
    //                             <p>So July 2022 is one of the most crucial months for aspirants looking to move to Canada for better job opportunities, free education for their kids and universal healthcare.&nbsp;</p>
    //                             <p>Another good news for aspiring Canada immigrants is that by 2024, the Canadian government will increase the Express Entry admissions to 110,000.</p>
    //                             <h3><strong>What are the benefits of submitting your Express Entry profile early?</strong></h3>
    //                             <p>Though July may seem far, there are a lot of benefits to starting working on your profile and submitting it to the Express Entry pool early.&nbsp;</p>
    //                             <ol>
    //                                 <li><strong>You might get selected in the first draw itself – </strong>Reiterating again here, the Express Entry draws are resuming in July. Preparing your documents for the Express Entry profile involves a lot of time and effort. You might have to get a good IELTS score, put all the documents in place and also prepare a full-proof application.</li>
    //                             </ol>
    //                             <ul>
    //                                 <li>Doing this in advance will reduce the scope of error and will also make you eligible for the first Express Entry draw itself. Another suggestion to speed up your application preparation is by having a Licensed Immigration Consultant by your side.</li>
    //                             </ul>
    //                             <ul>
    //                                 <li>Licensed Consultants or RCICs are certified individuals authorized by the Government of Canada to file your Canada PR application. With years of experience in the immigration industry, Keel’s Licensed Immigration Consultant not only speeds up your Canada PR process but also makes it absolutely hassle-free.</li>
    //                             </ul>
    //                             <p></p>
    //                             <p>2. <strong>Elimination of Tie-up</strong> – Sometimes the candidates’ scores get tied up and the immigration Refugees and Citizenship Canada (IRCC) considers factors like time and date of entry. Having your application filed at an early date and time can give you an edge there.</p>
    //                             <p>3. <strong>Leverage the benefits of the PNP&nbsp; – </strong>One of Canada’s primary immigration pathways, the Provincial&nbsp; Nominee Program is designed both to encourage and facilitate settlement in particular provinces across the country. Earlier, each Canadian province had its unique selection process but after the Express Entry system, many provinces have aligned with the federal system to expedite the immigration process.</p>
    //                             <h3><strong>How does this work?</strong></h3>
    //                             <p>While submitting your express entry profile, you can also select a province of your choice. Doing this doubles your Canada Immigration chances as you can receive a direct Express Entry invitation and also be selected by the province of your choice.&nbsp;</p>
    //                             <p>Please note, a provincial nomination adds an extra 600 points toward your CRS score which will guarantee that you will receive an Invitation to Apply (ITA) for Canadian PR in an upcoming draw.</p>
    //                             <p>For more information, you can read our Express Entry guide <a href="https://getkeel.com/canada-express-entry-guide-fast-track-your-migration-to-canada-in-2022/" target="_blank" rel="noreferrer noopener">here</a>.</p>
    //                         </div>
    //                     </div>
    //                     <div className='blogCommentBox'>
    //                         <div className='shorting'>
    //                             <p>0 Comments</p>
    //                             <div className='sortBy'>
    //                                 <span>sort by</span>
    //                                 <select>
    //                                     <option>Oldest</option>
    //                                     <option>New</option>
    //                                 </select>
    //                             </div>

    //                         </div>
    //                         <div className='bolgCmmnt'>
    //                             <div className='userImg'>
    //                                 <img className='img-fluid' src='https://getkeel.com/wp-content/uploads/2022/05/Untitled-design-3-1024x546.png' />
    //                             </div>
    //                             <textarea className='add a comment'></textarea>
    //                         </div>
    //                     </div>

    //                     <div className='relatedPosts'>
    //                         <h3>Related Posts
    //                         </h3>
    //                         <div className='blogGrid'>
    //                             {[...Array(3)].map(() => (
    //                                 <div className='blogCard'>
    //                                     <div className='blogImg'>
    //                                         <img className='img-fluid' src='https://getkeel.com/wp-content/uploads/2022/05/Untitled-design-3-1024x546.png' />
    //                                         <span>Canada Immigration</span>
    //                                     </div>
    //                                     <p>Know everything about Express Entry ahead of July 2022</p>
    //                                 </div>
    //                             ))}
    //                         </div>
    //                     </div>
    //                 </div>


    //             </div>
    //         </section>
    //     </>
    // )
}

export default BlogsDet;