import { css } from '@emotion/css'

export const container = css`
    min-height: calc(100vh - 100px);
    padding:80px 0px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    .immigrateForm h1 {
        font-size: 40px;
        color: #262e33;
        font-weight: 600;
      }
      
      .immigrateForm h1 span {
        color: #fd5b5b;
      }
      
      .immigrateForm p {
        color: #4d5459;
        font-size: 18px;
        font-weight: 500;
        margin: 20px 0;
      }
      
      .immigrateForm p span {
        color: #fd5b5b;
      }
      
      .inputForm {
        position: relative;
      }
      
      .inputForm input {
        width: 100%;
        border: 1px solid #e5e5e5;
        outline: none;
        border-radius: 4px;
        min-height: 40px;
        padding: 12px;
      }
      
      .inputForm label {
        position: absolute;
        left: 10px;
        pointer-events: none;
        margin: auto;
        top: 11px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
        -webkit-transition: all 0.2s ease;
        transition: all 0.2s ease;
        color: #262e33;
        font-size: 14px;
      }
      
      .formContainer {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column;
        gap: 30px;
        margin: 35px 0px;
      }
      
      .inputForm input:focus + label {
        top: -10px;
        background: white;
        color: #c32020;
        font-size: 12px;
        font-weight: 500;
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
`