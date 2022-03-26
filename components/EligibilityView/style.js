import { css } from '@emotion/css';

export const promiseSection = css`
    height: calc(100% - 100px);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;

      .container{position: -webkit-sticky;
      position: sticky;
      top: 0;
      background: white;
      z-index: 1;}
      
      h2.subHeadings {
        color: #c32020;
        font-size: 28px;
        text-align: center;
        margin-bottom: 50px;
        font-weight: 600;
      }
      
p.blackSubPera {
    text-align: center;
    color: #4d5459;
    font-size: 16px;
    margin-bottom: 100px;
  }
      
      .row {
        display: -ms-flexbox;
        display: -webkit-box;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        margin-right: -15px;
        margin-left: -15px;
      }
      .col-12,
      .col-md-6 {
        -ms-flex: 0 0 50%;
        -webkit-box-flex: 0;
                flex: 0 0 50%;
        max-width: 50%;
        
      }
      .iframeContainer iframe {
        width: 100%;
        height: 100%;
        min-height: 500px;
        max-height: 500px;
        border: none;
        border-radius: 4px;
        -webkit-box-shadow: 0px 3px 3px #c5c5c5;
                box-shadow: 0px 3px 3px #c5c5c5;
      }
      
      .iframeContainer {
        margin: 30px 0;
      }
      
.listEmlText ul {
    list-style: none;
  }
  
  .listEmlText ul li {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: start;
        -ms-flex-align: start;
            align-items: start;
    gap: 15px;
    padding: 20px 0px;
    font-size: 18px;
    font-weight: 400;
    border-bottom: 1px solid #dbdbdb;
    color: #4d5459;
  }
  
.img-fluid {
    max-width: 100%;
    height: auto;
  }
  
img.img-fluid.iframeImg {
    width: 150px;
    margin: auto;
    display: block;
  }
  

.getInTouch h4 {
    color: #6f7176;
    font-size: 14px;
    font-weight: 500;
    font-family: inter,sans-serif;
    margin-bottom: 15px;
  }
 
  
@media (min-width: 576px) {
    .container {
      max-width: 540px;
    }
  }
  
  @media (min-width: 768px) {
    .container {
      max-width: 720px;
    }
  }
  
  @media (min-width: 992px) {
    .container {
      max-width: 960px;
    }
  }
  
  @media (min-width: 1200px) {
    .container {
      max-width: 1170px;
    }
  }
  
  @media (min-width: 1400px) {
    .container {
      max-width: 1370px;
    }
  }
  @media (min-width: 768px) {
    .col-md {
      /* -ms-flex-preferred-size: 0; */
      -ms-flex-preferred-size: 0;
          flex-basis: 0;
      /* -ms-flex-positive: 1; */
      -webkit-box-flex: 1;
          -ms-flex-positive: 1;
              flex-grow: 1;
      max-width: 100%;
    }
    .row-cols-md-1 > * {
      -ms-flex: 0 0 100%;
      -webkit-box-flex: 0;
              flex: 0 0 100%;
      max-width: 100%;
    }
    .row-cols-md-2 > * {
      -ms-flex: 0 0 50%;
      -webkit-box-flex: 0;
              flex: 0 0 50%;
      max-width: 50%;
    }
    .row-cols-md-3 > * {
      -ms-flex: 0 0 33.333333%;
      -webkit-box-flex: 0;
              flex: 0 0 33.333333%;
      max-width: 33.333333%;
    }
    .row-cols-md-4 > * {
      -ms-flex: 0 0 25%;
      -webkit-box-flex: 0;
              flex: 0 0 25%;
      max-width: 25%;
    }
    .row-cols-md-5 > * {
      -ms-flex: 0 0 20%;
      -webkit-box-flex: 0;
              flex: 0 0 20%;
      max-width: 20%;
    }
    .row-cols-md-6 > * {
      -ms-flex: 0 0 16.666667%;
      -webkit-box-flex: 0;
              flex: 0 0 16.666667%;
      max-width: 16.666667%;
    }
    .col-md-auto {
      -ms-flex: 0 0 auto;
      -webkit-box-flex: 0;
              flex: 0 0 auto;
      width: auto;
      max-width: 100%;
    }
    .col-md-1 {
      -ms-flex: 0 0 8.333333%;
      -webkit-box-flex: 0;
              flex: 0 0 8.333333%;
      max-width: 8.333333%;
    }
    .col-md-2 {
      -ms-flex: 0 0 16.666667%;
      -webkit-box-flex: 0;
              flex: 0 0 16.666667%;
      max-width: 16.666667%;
    }
    .col-md-3 {
      -ms-flex: 0 0 25%;
      -webkit-box-flex: 0;
              flex: 0 0 25%;
      max-width: 25%;
    }
    .col-md-4 {
      -ms-flex: 0 0 33.333333%;
      -webkit-box-flex: 0;
              flex: 0 0 33.333333%;
      max-width: 33.333333%;
    }
    .col-md-5 {
      -ms-flex: 0 0 41.666667%;
      -webkit-box-flex: 0;
              flex: 0 0 41.666667%;
      max-width: 41.666667%;
    }
    .col-md-6 {
      -ms-flex: 0 0 50%;
      -webkit-box-flex: 0;
              flex: 0 0 50%;
      max-width: 50%;
    }
    .col-md-7 {
      -ms-flex: 0 0 58.333333%;
      -webkit-box-flex: 0;
              flex: 0 0 58.333333%;
      max-width: 58.333333%;
    }
    .col-md-8 {
      -ms-flex: 0 0 66.666667%;
      -webkit-box-flex: 0;
              flex: 0 0 66.666667%;
      max-width: 66.666667%;
    }
    .col-md-9 {
      -ms-flex: 0 0 75%;
      -webkit-box-flex: 0;
              flex: 0 0 75%;
      max-width: 75%;
    }
    .col-md-10 {
      -ms-flex: 0 0 83.333333%;
      -webkit-box-flex: 0;
              flex: 0 0 83.333333%;
      max-width: 83.333333%;
    }
    .col-md-11 {
      -ms-flex: 0 0 91.666667%;
      -webkit-box-flex: 0;
              flex: 0 0 91.666667%;
      max-width: 91.666667%;
    }
    .col-md-12 {
      -ms-flex: 0 0 100%;
      -webkit-box-flex: 0;
              flex: 0 0 100%;
      max-width: 100%;
    }
  }
`

export const applicationPlatform = css`
    background: #fafafa;
    padding: 50px 0;
    .container{position: -webkit-sticky;
        position: sticky;
        top: 0;
        background: white;
        z-index: 1;}
        
.row {
    display: -ms-flexbox;
    display: -webkit-box;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
  }
    .col-md-6 {
        -ms-flex: 0 0 50%;
        -webkit-box-flex: 0;
                flex: 0 0 50%;
        max-width: 50%;
      }
  
.leftConttPanel h3 {
    color: #262e33;
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 20px;
  }
  
  .leftConttPanel p {
    color: #4d5459;
    font-size: 16px;
    margin-bottom: 20px;
  }
  
  .leftConttPanel button.submitBtn {
    width: 320px;
  }
  
button.submitBtn {
    color: white;
    background: #c32020;
    border: none;
    width: 100%;
    font-weight: 500;
    font-size: 16px;
    padding: 15px 10px;
    border-radius: 4px;
  }
  
  
.rightImagePanel {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    height: 100%;
  }
  
.img-fluid {
    max-width: 100%;
    height: auto;
  }
`

export const improveScore = css`
    padding: 50px 0;
    .container{position: -webkit-sticky;
        position: sticky;
        top: 0;
        background: white;
        z-index: 1;}
        
.row {
    display: -ms-flexbox;
    display: -webkit-box;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
  }
    .col-md-6 {
        -ms-flex: 0 0 50%;
        -webkit-box-flex: 0;
                flex: 0 0 50%;
        max-width: 50%;
      }
  
.scroreImgCont img {
    width: 90px;
    margin: auto;
    display: block;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    height: 100%;
    -o-object-fit: contain;
       object-fit: contain;
  }
  
.img-fluid {
    max-width: 100%;
    height: auto;
  }
  
h4.sectionSubHeading {
    font-size: 28px;
    font-weight: 500;
  }
  
  p.sectionSubHeading {
    font-size: 16px;
  }
  
.scroreAccordionCont {
    margin-top: 20px;
  
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    gap: 10px;
  }
  
button.course-accordion {
    cursor: pointer;
    padding: 8px;
    width: 100%;
    border: none;
    border-radius: 4px;
    text-align: left;
    outline: none;
    font-size: 18px;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    line-height: 1.5em;
    text-transform: none;
    letter-spacing: 0px;
    font-weight: 500;
    font-style: normal;
    color: #262e33;
    background: #fafafa;
  }
  button.course-accordion.active,
  button.course-accordion:hover {
    background-color: rgba(166, 166, 166, 0.6);
  }
  
  
  button.course-accordion:after {
    content: '\002B';
    color: black;
    float: right;
    margin-left: 5px;
  }
  
  
  button.course-accordion.active:after {
    content: "\2212";
  }
div.course-panel {
    padding: 0 18px;
    background-color: transparent;
    max-height: 0;
    overflow: hidden;
    -webkit-transition: max-height 0.2s ease-out;
    transition: max-height 0.2s ease-out;
    width: 96%;
    font-size: 15px;
    line-height: 28px;
    letter-spacing: .4px;
    font-weight: 400;
    font-style: normal;
  }
  
  div.course-panel p {
    padding: 20px 0;
  }  
`