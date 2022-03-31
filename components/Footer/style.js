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
    justify-content:center;
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
            justify-content: center;
            @media (max-width:767px){
              flex-wrap:wrap;
              flex-direction:column;
            }
  }
  
  .socialBtns div {
    width: 30px;
    height: 30px;
    cursor:pointer;
  }
  
  .copyRight p {
    color: white;
    font-size: 10px;
  }
  .terms {
    
    border-top: 1px solid #db414196;
    li{
      a{
color:#e5a0a0;
      }
    }
}

.terms ul {
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 10px 0;
    gap: 20px;
    font-size: 12px;
    color: #e5a0a0;
}

.terms ul li {
    cursor: pointer;
}

.terms ul li:hover {
    color: white;
}
`