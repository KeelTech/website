import { css } from '@emotion/css';

export const container = css`
    font-size: 28px;
    font-weight: 500;
    text-align: center;
    padding: 30px 0px;
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    .reviewSLider {
        margin-top: 40px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        overflow: auto;
        gap: 20px;
        padding: 20px 0;
      }
      
      .revSlideCard img {
        -webkit-box-shadow: 0 0 10px #0000002b;
                box-shadow: 0 0 10px #0000002b;
        border-radius: 4px;
      }
      
      .revSlideCard {
        min-width: 220px;
      }     
`

export const chooseUsContainer = css`
    padding: 30px 0px;
    .choseHeading h4 {
        font-size: 26px;
        font-weight: 500;
        margin-bottom: 20px;
      }
      
      .chooseDetails ul li {
        border: 1px solid #e9dddd;
        padding: 20px;
        background: #fff;
        display: inline-block;
        border-radius: 5px;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
                transform: perspective(1px) translateZ(0);
        -webkit-transition-duration: 1s;
                transition-duration: 1s;
        -webkit-transition-property: -webkit-transform;
        transition-property: -webkit-transform;
        transition-property: transform;
        transition-property: transform, -webkit-transform;
        -webkit-transition-timing-function: ease-out;
                transition-timing-function: ease-out;
        width: 100%;
        -webkit-box-shadow: 0px 0px 15px #dad8d87a;
                box-shadow: 0px 0px 15px #dad8d87a;
        min-height: 170px;
      }
      
      .chooseDetails ul {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column;
        gap: 10px;
      }
      
      .chooseDetails ul li h3 {
        font-size: 16px;
        font-weight: 600;
      }
      
      .chooseDetails ul li p {
        font-size: 14px;
        margin-top: 8px;
        padding-left: 15px;
        position: relative;
      }
      
      .chooseDetails ul li p:before {
        content: '';
        position: absolute;
        width: 4px;
        left: 0px;
        top: 3px;
        bottom: 0px;
        border-radius: 18px;
        background: linear-gradient(135deg, #ff0000 0, #b72929 100%);
      }
`