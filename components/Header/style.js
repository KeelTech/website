import { css } from '@emotion/css'

export const container = css`
      position: -webkit-sticky;
      position: sticky;
      top: 0;
      background: white;
      z-index: 1;
      .navBarMain {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
        -webkit-box-pack: justify;
            -ms-flex-pack: justify;
                justify-content: space-between;
        min-height: 100px;
      }
      
      .main-logo img {
        width: 100px;
      }
      
      .navListing ul {
        list-style: none;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        gap: 30px;
      }
      
      .navListing ul li {
        color: #c32020;
        font-size: 16px;
        font-weight: 500;
        padding-bottom: 4px;
        cursor: pointer;
        -webkit-transition: all 0.2s ease;
        transition: all 0.2s ease;
      }
      
      .navListing ul li a:hover:after {
        -webkit-transform: scaleX(1);
                transform: scaleX(1);
        -webkit-transform-origin: 100% 50%;
                transform-origin: 100% 50%;
      }
      
      .navListing ul li a:after {
        display: block;
        content: "";
        border-bottom: solid 3px #700000;
        -webkit-transform: scaleX(0);
                transform: scaleX(0);
        -webkit-transition: -webkit-transform 250ms ease-in-out;
        transition: -webkit-transform 250ms ease-in-out;
        transition: transform 250ms ease-in-out;
        transition: transform 250ms ease-in-out, -webkit-transform 250ms ease-in-out;
      }
      
      .navListing ul li a:hover {
        color: #700000;
      }
      button.getStarted {
        color: white;
        background: #c32020;
        border: none;
        width: 130px;
        font-weight: 500;
        font-size: 16px;
        padding: 15px 10px;
        border-radius: 4px;
      }
      li a{
        text-decoration: none;
        color: #c32020;
      }
`