import { css } from '@emotion/css';

export const container = css`
    margin-top: 100px;
    background: #c32020;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    min-height: 100px;
    padding:30px 0px;
  .contactLeftCont img {
    width: 200px;
    display: block;
    margin: 0 auto;
  }
  
  .contactLeftCont {
    height: 100%;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
  }
  
  .socialBtns {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    height: 100%;
    gap: 10px;
  }
  
  .redirection ul li {
    color: white;
    font-size: 14px;
  }
  li a{
    text-decoration: none;
    color: #FFFFFF;
  }
  
  .redirection ul {
    list-style: none;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    gap: 20px;
    -webkit-box-pack: space-evenly;
        -ms-flex-pack: space-evenly;
            justify-content: space-evenly;
            @media (max-width:767px){
              flex-wrap:wrap;
              flex-direction:column;
            }
  }
  
  .socialBtns div {
    width: 30px;
    height: 30px;
  }
  
  .copyRight p {
    color: white;
    font-size: 10px;
  }
  
`