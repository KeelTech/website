import { css } from '@emotion/css';

export const container = css`
    height: calc(100% - 100px);
    .testiMainCont {
        background-color: #c32020;
        padding: 60px 30px;
        border-radius: 10px;
      }
      
      .testLeftHed {
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
        color: white;
        gap: 15px;
      }
      
      .testLeftHed h5 {
        font-size: 18px;
        font-weight: 400;
      }
      
      .testLeftHed h4 {
        font-size: 26px;
        font-weight: 500;
      }
      
      .testiMoCard p {
        color: white;
        line-height: 30px;
        margin: auto;
      }
      
      .testiUsr img {
        width: 50px;
        border-radius: 40px;
      }
      
      .testiMoCard {
        padding: 10px 60px;
        width: 300px;
        margin: auto;
      }
      
      .testiUsr {
        margin-top: 30px;
      }

`