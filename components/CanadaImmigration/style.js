import { css } from '@emotion/css';

export const container = css`
background: #fafafa;
padding: 50px 0;
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

img.img-fluid.iframeImg {
  width: 150px;
  margin: auto;
  display: block;
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

`