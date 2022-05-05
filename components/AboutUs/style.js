import { css } from '@emotion/css';

export const container = css`
min-height:80vh;
.termsCond h1 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 32px;
  font-weight: 500;
  margin-top:40px;  
}

.termsCond {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.termsCond p b {}

.termsCond p {
  font-size: 14px;
}

.termsCond p b {
  display: block;
  margin: 20px 0 0 0px;
}

h2{
  font-size:18px;
}
ul {
  list-style: none;
}

ul li b {
  margin-right: 5px;
}

ul li {
  padding: 4px 0;
  font-size: 14px;
}

`