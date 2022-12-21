import { useEffect } from 'react';
import { useRouter } from 'next/router'
import { getCookie, setCookie } from '@/helpers/utils.js';

import { container } from './style.js';
import MetaTags from '@/components/MetaTags';

const BlogsDet = ({ blogData, pathUrl}) => {
    const { body, title, id } = blogData||{}
    const router = useRouter()

    useEffect(()=>{
        if(id){
            const val = getCookie('blogData');
            const urlToPush = title?.replaceAll('?','').replaceAll(' ','-')+'-blogInfo';
            const isCustomUrl = pathUrl.includes('-blogInfo');
            var blogData;
            try{
                if(val?.length){
                    blogData = JSON.parse(val);
                    if(!isCustomUrl){
                        if(!blogData[urlToPush]){
                            blogData[urlToPush] = id;
                            setCookie('blogData', JSON.stringify(blogData))
                        }
                        router.replace(`/blogs/${urlToPush}`, undefined, { shallow: true });
                    }
                }else{
                    if(!isCustomUrl){
                        const data = {};
                        data[urlToPush] = id;
                        setCookie('blogData', JSON.stringify(data))
                        router.replace(`/blogs/${urlToPush}`, undefined, { shallow: true });
                    }
                }
            }catch(e){

            }
        }
    },[id]);
    const metaInfo = {
        title,
        ogUrl: `https://getkeel.com/blogs/${id}`
    }
    return (
        <section className={container}>
            <MetaTags metaInfo={metaInfo}/>
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
}

export default BlogsDet;