import { css } from '@emotion/css';

export const container = css`
    // height: calc(100% - 100px);
    padding:80px 0px;
    @media (max-width:767px){
      padding:30px 0px;
    }
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
      
    .blogsHeading h1 {font-size: 50px;
      font-weight: 600;
      margin-bottom: 60px;}
  
  .blogsHeading {display: flex;align-items: center;justify-content: center;}
  
  .blogsContainer {padding: 80px 0px;}
  
  .blogGrid {display: grid;grid-template-columns: repeat(3,1fr);align-items: stretch;
      grid-row-gap: 28px;grid-column-gap: 14px;}
  
  .blogCard {box-shadow: 0 0 10px 0 rgb(0 0 0 / 15%);border-radius: 4px;overflow: hidden;transition: box-shadow .3s;cursor: pointer;}
  
  .blogImg {position: relative;}
  
  .blogImg span {color: white;position: absolute;right: 6px;top: 5px;font-weight: 500;font-size: 10px;background: #c32020;padding: 4px 9px;}
  
  .blogCard p {padding: 12px;font-size: 14px;line-height: 18px;}
  
  .blogCard:hover {box-shadow: 7px 9px 23px rgb(33 33 33 / 20%);}
  .recentPost {transition: background .3s,border .3s,border-radius .3s,box-shadow .3s;
    padding: 40px 40px;box-shadow: 0 0 10px 0 rgb(0 0 0 / 15%);border-radius: 4px;}

.recentPost h3 {font-size: 26px;font-weight: 600;}

.postCard p {color: black;font-size: 16px;font-weight: 500;}

.postCard span {font-size: 14px;font-weight: 500;color: #a5a5a5;}

.wantTravelTo {transition: background .3s,border .3s,border-radius .3s,box-shadow .3s;
    padding: 40px 40px;
    box-shadow: 0 0 10px 0 rgb(0 0 0 / 15%);
    border-radius: 4px;margin-top: 30px;background: #c32020;}

.wantTravelTo h2 {color: white;font-size: 28px;font-weight: 600;}

.wantTravelTo button {background: transparent;border: 1px solid white;font-size: 18px;color: white;margin-top: 10px;padding: 12px 25px;}
.listRecent {margin-top: 30px;display: flex;flex-direction: column;gap: 20px;}

.row.gap-40px {gap: 30px;}

.col-md-4.col-12.pl-web-40px 
{
  padding-left: 40px;
}
.recentMobile{
  display:none;
}
.recentMobile h3 {
  font-size: 26px;
  font-weight: 500;
}

.recntSlideMain {
  display: flex;
  gap: 14px;
  padding: 21px 0;
  border-bottom: 1px solid #8484842e;
  margin-bottom: 30px;
  overflow: auto;
}

.slideCards {
  min-height: 320px;
  position: relative;
  width: 240px;
  flex-shrink: 0;
  box-shadow: 0 0 10px 0 rgb(0 0 0 / 15%);
  border-radius: 15px;
  overflow: hidden;
}

.slideCards img {
  height: 100%;
  object-fit: cover;
}

.slideCards p {
  position: absolute;
  bottom: 0;
  color: white;
  padding: 10px;
  background: #00000040;
  margin: 0;
  font-size: 16px;
}
@media (max-width:767px) {
  .col-md-4.col-12.pl-web-40px {padding-left: 15px;
    padding-top:30px;

  }
  .blogGrid{
    grid-template-columns: repeat(1,1fr);
  }
  .blogsHeading h1{
    margin-bottom:0px;
    font-size:40px;
  }
  .blogsContainer{
    padding-top:50px;
  }
  .col-md-4.col-12.pl-web-40px .recentPost{
    display:none;
  }
  .recentMobile{
    display:block;
  }
}
`