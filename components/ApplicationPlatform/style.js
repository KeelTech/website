import { css } from '@emotion/css';

export const container = css`
    padding: 80px 0;
    .sectionSubHeading {
        text-align: center;
        margin-bottom: 50px;
    }
    .platformList ul {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column;
        gap: 30px;
        list-style: none;
      }
      
      .platformList ul li {
        gap: 15px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
      }
      
      .platformList ul li img {
        width: 60px;
        background: white;
        border: 1px solid #181818;
        padding: 8px;
        border-radius: 4px;
        -webkit-box-shadow: 0px 0px 3px 3px #dcdcdc42;
                box-shadow: 0px 0px 3px 3px #dcdcdc42;
      }
      
      .platformList ul li p {
        font-weight: 600;
        font-size: 16px;
      }
      
      .platformList ul li span {
        font-size: 14px;
        margin-top: 4px;
        display: inline-block;
      }
      
`

export const tableSection = css`
    padding: 80px 0px;
    .tableCont {
        margin-top: 50px;
        border: 1px solid #a9a9a94d;
      }
      
      .tableCont table {
        width: 100%;
        border-collapse: collapse;
        border-spacing: 0;
      }
      
      .tableCont th {
        text-align: left;
        padding: 12px;
        font-weight: 500;
        font-size: 16px;
        color: white;
      }
      
      .tableCont tr td {
        text-align: left;
        padding: 12px;
        font-weight: 500;
        border-bottom: 1px solid #a9a9a94d;
        font-size: 14px;
      }
`

export const combis = css`
padding: 80px 0px;
    .faqSection .scroreAccordionCont {
        margin-top: 50px;
    }
    
    .tableCont thead tr {
        background-image: -webkit-gradient(linear, left top, right top, from(#ee514f), to(#c32020));
        background-image: linear-gradient(to right, #ee514f, #c32020);
    }
`