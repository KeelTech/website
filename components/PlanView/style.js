import { css } from '@emotion/css';

export const container = css`
    min-height: calc(100vh - 320px);
    padding:80px 0px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    @media (max-width:767px){
      padding:30px 0px;
      height:auto;
      .row{
        gap:30px;
      }
    } 
    .serviceCards {
        overflow: hidden;
        background: white;
        -webkit-box-shadow: 0px 0px 3px 3px #ededed;
                box-shadow: 0px 0px 3px 3px #ededed;
        border-radius: 4px;
      }
      
      .serviceCont {
        padding: 12px;
      }
      
      .serviceCont h4 {
        font-size: 18px;
        font-weight: 600;
      }
      
      .serviceCont p {
        font-size: 16px;
        margin: 10px 0;
        font-weight: 600;
      }
      
      .serviceCont p span {
        text-decoration: line-through;
        color: #cfcfcf;
        font-weight: 400;
      }
      
      .serviceCont button {
        background: white;
        padding: 8px;
        font-size: 16px;
        font-weight: 500;
        border-radius: 4px;
        border: 1px solid #c32020;
        color: #c32020;
        margin-top: 12px;
      }
`