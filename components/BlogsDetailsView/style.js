import { css } from '@emotion/css';

export const container = css`
    padding:80px 0px;
    @media (max-width:767px){
      padding:30px 0px;
    }
    .blogImgDataCont {
      img{
        max-width: 100%;
        height: auto;
      }
    }
    
    .blogGrid {display: grid;grid-template-columns: repeat(3,1fr);align-items: stretch;
      grid-row-gap: 28px;grid-column-gap: 14px;}
  
  .blogCard {box-shadow: 0 0 10px 0 rgb(0 0 0 / 15%);border-radius: 4px;overflow: hidden;transition: box-shadow .3s;cursor: pointer;}
  
  .blogImg {position: relative;}
  
  .blogImg span {color: white;position: absolute;right: 6px;top: 5px;font-weight: 500;font-size: 10px;background: #c32020;padding: 4px 9px;}
  
  .blogCard p {padding: 12px;font-size: 14px;line-height: 18px;}
  
  .blogCard:hover {box-shadow: 7px 9px 23px rgb(33 33 33 / 20%);}
  .recentPost {transition: background .3s,border .3s,border-radius .3s,box-shadow .3s;
    padding: 40px 40px;box-shadow: 0 0 10px 0 rgb(0 0 0 / 15%);border-radius: 4px;}

    .blogDetailsCont {width: 80%;margin: auto;
      img{
        max-width: 100%;
        height: auto;
        border-radius: 4px;
        box-shadow: 2px 2px 11px #959595;
      }
      section{
        padding:15px 0px;
      }
      h1{
        margin:10px 0px;
      }
      ul{
        list-style:none;
      }
      ol li {font-weight: 400;
        color: #292d34;
        font-size: 17px;
        line-height: 24px;
        margin-bottom: 20px;
      }
      p {font-weight: 400;color: #292d34;
    
        font-size: 17px;
        line-height: 24px;margin-bottom: 20px;}
        h3 {font-size: 22px;font-weight: 700; margin-bottom:15px;}
        a{
          color:#03a9f4;
        }

    }



.blogImgDataCont img {width: 100%;border-radius: 4px;}

.imgDtsl {display: flex;align-items: center;justify-content: space-between;padding: 20px 0;}

.imgDtsl p {color: #9e9e9e;font-weight: 500;}

.socialBlog {display: flex;align-items: center;gap: 10px;}

.blogData h3 {font-size: 32px;font-weight: 700;}

.blog-data-container p {font-weight: 400;color: #292d34;
    
    font-size: 17px;
    line-height: 24px;margin-bottom: 20px;}

.blog-data-container {margin-top: 20px;font-weight: 600;}

.blog-data-container h3 {margin-bottom: 20px;}

.blog-data-container ol {padding-left: 20px;margin-bottom: 20px;}

.blog-data-container ol li {font-weight: 400;
    color: #292d34;
    font-size: 17px;
    line-height: 24px;
    margin-bottom: 20px;}

.blog-data-container ul li {font-weight: 400;
    color: #292d34;
    font-size: 17px;
    line-height: 24px;
    margin-bottom: 20px;}

.blog-data-container ul {padding-left: 20px;}

.blog-data-container a {color: #c32020;display: inline-block;font-weight: 500;}

.shorting {display: flex;align-items: center;justify-content: space-between;}

.blogCommentBox {margin: 50px 0;}

.shorting p {font-weight: 500;font-size: 18px;}

.sortBy {display: flex;gap: 10px;align-items: center;}

.sortBy select {padding: 4px 10px;border-radius: 4px;font-weight: 600;}
.bolgCmmnt {display: flex;align-items: self-start;gap: 20px;margin-top: 30px;}

.userImg {width: 60px;height: 60px;}

.userImg img {width: 60px;height: 60px;object-fit: cover;}

.bolgCmmnt textarea {width: 100%;border: 1px solid #b3b3b3;min-height: 60px;border-radius: 4px;}

.relatedPosts h3 {text-align: center;font-size: 32px;
  font-weight: 600;margin-bottom: 30px;}

.relatedPosts {margin-top: 80px;}

.socialBlog div {cursor: pointer;}

.userImg img {border-radius: 4px;}
    @media (max-width:767px) {
      .blogDetailsCont{
        width:100%;
      }
      .blogGrid{
        grid-template-columns: repeat(1,1fr);
      }
    }

`