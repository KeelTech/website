import { css } from '@emotion/css'

export const contactSection = css`
    // .container{
    //     position: -webkit-sticky;
    //     position: sticky;
    //     top: 0;
    //     background: white;
    //     z-index: 1;
    // }
    padding:80px 0px;
    
    .contactContainer {
      // padding-bottom: 50px;
    }
    
    .contactMainHeading {
      // min-height: 250px;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
          -ms-flex-align: center;
              align-items: center;
      -webkit-box-pack: center;
          -ms-flex-pack: center;
              justify-content: center;
    }
    .row.reuseForm {}

.col-md-6.col-12.hideOnOther {
    display: none;
}

.col-md-6.col-12.reuseForm {
    width: 100%;
    max-width: 100%;
    flex: 100%;
}

.col-md-6.col-12.customFormIn section {
    padding: 0;
}
    
    
    // .row {
    //   display: -ms-flexbox;
    //   display: -webkit-box;
    //   display: flex;
    //   -ms-flex-wrap: wrap;
    //   flex-wrap: wrap;
    //   margin-right: -15px;
    //   margin-left: -15px;
    // }
    // .col-12,
    // .col-md-6 {
    //   -ms-flex: 0 0 50%;
    //   -webkit-box-flex: 0;
    //           flex: 0 0 50%;
    //   max-width: 50%;
      
    // }
    
.getInTouch h4 {
  color: #6f7176;
  font-size: 14px;
  font-weight: 500;
  font-family: inter,sans-serif;
  margin-bottom: 15px;
}

.getInTouch p {
  font-size: 18px;
  margin-bottom: 50px;
}

.getInTouch h5 {
  font-size: 18px;
  font-weight: 500;
}
    .contactForm {
      border: 2px solid #ba2323;
      padding: 20px;
      border-radius: 10px;
      -webkit-box-shadow: 1px 1px 14px 10px #f0ecec;
              box-shadow: 1px 1px 14px 10px #f0ecec;
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
    
.inputForm textarea {
  width: 100%;
  border: 1px solid #e5e5e5;
  outline: none;
  border-radius: 4px;
  min-height: 120px;
  padding: 12px;
}

.inputForm textarea:focus + label {
  color: rebeccapurple;
}

textarea.customTextArea:focus + label {
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
    
    
    .contactLeftCont img {
      width: 200px;
      display: block;
      margin: 0 auto;
    }
    
    .contactLeftCont {
      height: 100%;
      -webkit-box-pack: center;
          -ms-flex-pack: center;
              justify-content: center;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
          -ms-flex-direction: column;
              flex-direction: column;
    }
    

.contactMainHeading h2 {
  font-size: 50px;
  font-weight: 600;
  margin-bottom:60px;
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
}`