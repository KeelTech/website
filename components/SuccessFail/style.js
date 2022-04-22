import { css } from '@emotion/css';

export const container = css`
.failImg{
display:none;
background: #f44336;
border-radius: 100px;
width: 105px;
height: 105px;
}
.failPayment{
    .failImg{
        display:block;
    }
    .successImg{
        display:none;
    }
}
svg.failImg path {stroke: white;stroke-width: 1px;}

.afterPayMessage {min-height: 35rem;display: flex;align-items: center;justify-content: center;flex-direction: column;gap: 30px;}

.afterPayMessage h3 {font-size: 28px;font-weight: 600;}

.afterPayMessage img {width: 105px;}

.afterPayMessage button {color: white;
    background: #c32020;
    border: none;
    
    font-weight: 500;
    font-size: 16px;
    padding: 15px 10px;
    border-radius: 4px;min-width: 250px;}
    
`