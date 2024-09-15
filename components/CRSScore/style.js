import { css } from '@emotion/css'

export const container = css`
    // height: calc(100% - 100px);
    padding:80px 0px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    @media (max-width:767px){
      padding:30px 0px;
    }
  
  .getStrtBtn {
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
            @media (max-width:767px){
              align-items:center;
            }
  }
  h2.subHeadings {
    color: #c32020;
    font-size: 28px;
    text-align: center;
    margin-bottom: 50px;
    font-weight: 600;
  }
  
  .getStrtBtn h4 {
    color: #262e33;
    font-size: 22px;
    font-weight: 600;
  }
  
  .getStrtBtn button {
    color: white;
    background: #c32020;
    border: none;
    width: 280px;
    font-weight: 500;
    font-size: 16px;
    padding: 15px 10px;
    border-radius: 4px;
    margin-top: 15px;
  }
  
  .listEmlText ul {
    list-style: none;
    @media (max-width:767px){
      margin-top:30px;
    }
  }
  
  .listEmlText ul li {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: start;
        -ms-flex-align: start;
            align-items: start;
    gap: 15px;
    padding: 20px 0px;
    font-size: 18px;
    font-weight: 400;
    border-bottom: 1px solid #dbdbdb;
    color: #4d5459;
  }
  
  .listEmlText ul li img {
    width: 80px;
    flex-shrink: 0;
}
`