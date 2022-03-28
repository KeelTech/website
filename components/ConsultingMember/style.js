import { css } from '@emotion/css';

export const container = css`
    padding: 50px 0;
    .imgigCard {
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
      }
      
      .imgrRight img {
        border-radius: 4px;
      }
      
      .imgrPrice {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
        -webkit-box-pack: justify;
            -ms-flex-pack: justify;
                justify-content: space-between;
        padding: 20px 0px;
      }
      
      .imgigCard img {
        width: 118px;
        display: block;
        margin-top: 8px;
      }
      
      .imgrPrice p {
        font-weight: 600;
        font-size: 24px;
      }
      
      .imgrPrice p sapne {
        display: block;
        width: 100%;
      }
      
      .imgrPrice p span {
        display: block;
        font-weight: 500;
        text-decoration: line-through;
        font-size: 18px;
        color: #b1b1b1;
      }
      
      .imgrPrice button {
        color: white;
        background: #c32020;
        border: none;
        width: 130px;
        font-weight: 500;
        font-size: 16px;
        padding: 15px 10px;
        border-radius: 4px;
      }      
`