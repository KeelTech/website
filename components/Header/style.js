import { css } from '@emotion/css'

export const container = css`
      position: -webkit-sticky;
      position: sticky;
      top: 0;
      background: white;
      z-index: 2;
      .navBarMain {
        display: flex;
                align-items: center;
                justify-content: space-between;
        min-height: 100px;
      }
      .main-logo{
        display: flex;
        align-items: end;
        gap: 10px;
        img {
          width: 100px;
        }
      }
      
      .navListing ul {
        list-style: none;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        gap: 30px;
        @media (max-width:992px){
         display:none;
        }
      }
      .toggleMain{
        display:none;
        position:relative;
        @media (max-width:992px){
          display:block;
        }
        #menu {
          // display: none;
          height: 100%;
          width: 100%;
          background: transparent;
          top: 0;
          left: 0;
          bottom: 0;
          margin: auto;
          transition: .5s all ease;
          pointer-events: none;
          visibility: hidden;
          position: fixed;
          z-index:9;
          // img.sideBarLogo{
          //   display:none;
          // }
          ul.mainList {
            position: absolute;
            width: 320px;
            margin: 0 0 0 0px;
            padding: 55px 10px;
            background: #ffffff;
            list-style-type: none;
            -webkit-font-smoothing: antialiased;
            transform-origin: 0 0;
            -webkit-transform: translate(-100%, 0);
            -moz-transform: translate(-100%, 0);
            -ms-transform: translate(-100%, 0);
            transform: translate(-100%, 0);
            -webkit-transition: -webkit-transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
            transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
            height: 100vh;
            img{
              width:150px;
              margin-bottom:30px;
            }
            li{
              padding: 12px 8px;
              border-bottom: 1px solid #efefefad;
              &:last-child{
                border:none;
              }
              a{
                color:black;
              }
            }
        }
        }
      }
input{
  display: block;
    width: 40px;
    height: 32px;
    position: absolute;
    top: -7px;
    left: -5px;
    cursor: pointer;
    opacity: 0;
    z-index: 20;
    &.inputClick ~ #menu {
      // display: block;
      position: fixed;
      height: 100%;
      width: 100%;
      background: #000000b8;
      top: 0;
      left: 0;
      bottom: 0;
      margin: auto;
      visibility:inherit;
      pointer-events:all;
      // img.sideBarLogo{
      //   display:block;
      // }
       ul {
        transform: none !important;
      }
      img.sideBarLogo{
        // display:block;
      }
  }
  &.inputClick ~ span.bars {
    opacity: 1;
    transform: rotate(45deg) translate(0px, 2px);
    background: #232323;
    display:none;
    &:nth-last-child(3) {
      opacity: 0;
      transform: rotate(0deg) scale(0.2, 0.2);
  }
  &:nth-last-child(2) {
    transform: rotate(-45deg) translate(0, -1px);
}
}
}
span{
  &.bars{
    display: block;
    width: 25px;
    height: 3px;
    margin-bottom: 5px;
    position: relative;
    background: #c32020;
    border-radius: 3px;
    z-index: 1;
    transform-origin: 4px 0;
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
    &:first-child {
      transform-origin: 0 0;
  }
    &:nth-last-child(2) {
      transform-origin: 0 100%;
  }
  }
}
        
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
      .navListing ul li a.actTab:after {
        -webkit-transform: scaleX(1);
                transform: scaleX(1);
        -webkit-transform-origin: 100% 50%;
                transform-origin: 100% 50%;
                color: #700000;
      }
      .navListing ul li a.actTab {
                color: #700000;
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
        @media (max-width:992px){
          padding:8px 10px;
        }
      }
      li a{
        text-decoration: none;
        color: #c32020;
      }

      span.closeSide {
        position: absolute;
        right: 20px;
        top: 72px;
    }
    
    span.closeSide img {
        width: 25px !important;
        margin: 0px !important;
        cursor: pointer;
    }
    @media (max-width:992px){
      .navBarMain {
        min-height: 60px !important;
    }
    nav{
      box-shadow:2px 2px 5px #0000000a;
    }
     }
     .mobIContop{
      display:none;
     }
     .getStarted span{
      color:white;
      }
     @media (max-width:992px){
      .mobIContop{
        display:block;
      }
      button.getStarted{
        display:flex;
        align-items:center;
        width:38px;
        height:38px;
        background:none;
        padding:8px;
        display:none;
        }
      .getStarted span{
      display:none;
      }
     }
`