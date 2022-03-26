import { css } from '@emotion/css';

export const container = css`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    // height: calc(100vh - 100px);
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding:30px 0px;
    h1.blackSubHed {
        text-align: center;
        font-size: 40px;
        font-weight: 500;
        color: #262e33;
      }
      
      p.blackSubPera {
        text-align: center;
        color: #4d5459;
        font-size: 16px;
        margin-bottom: 100px;
      }
      
      .servicCard {
        text-align: center;
        padding: 30px 0;
      }
      
      .servicCard img {
        margin-bottom: 10px;
      }
      
      .servicCard p {
        color: #4d5459;
        font-size: 18px;
      }
      
      .serviceBtn button {
        color: white;
        background: #c32020;
        border: none;
        font-weight: 500;
        font-size: 16px;
        padding: 15px 10px;
        border-radius: 4px;
        margin: auto;
        display: block;
        margin-top: 20px;
        width: 240px;
      }

`