import { css } from '@emotion/css';

export const container = css`
  // height: calc(100% - 100px);
  padding: 80px 0px;
  @media (max-width:767px){
    padding:30px 0px;
  }
  .contactLeftCont h4 {
    font-size: 28px;
    font-weight: 600;
  }
  
  .contactForm {
    background:white;
    border: 2px solid #ba2323;
    padding: 20px;
    border-radius: 10px;
    -webkit-box-shadow: 1px 1px 14px 10px #f0ecec;
            box-shadow: 1px 1px 14px 10px #f0ecec;
  }
 

.contactLeftCont {
    height: 100%;
}

.contactsImg {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.contactsImg img {width: 280px;}
`
