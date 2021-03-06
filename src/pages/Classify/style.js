import styled from 'styled-components'
export const Wrapper = styled.div`
.sale-box{
 height: 40.09rem;
 /* width: 4.8875rem;a */
 // overflow: hidden;
 padding-bottom: 1.28rem;
 padding-bottom: 12.8vw;
 background-color: #fff;
 background: #fff!important;
 .sale-main{
 display: -webkit-flex;
 display: flex;
 height: 100%;
 .sale-left{
 overflow-y: auto;
 height: 100%;
 width: 4.8875rem;
 background-color: #f8f8f8;
 -webkit-overflow-scrolling: touch;
 ul{
 flex: none;
 position: relative;
 z-index: 0;
 list-style: none;
 width: 4.8875rem;
 box-sizing: border-box;
 padding: 0;
 font-size: 0.23rem;
 .left-data{
  height: 4.055rem;
  width: 2.7556rem;
  padding: 0 0.416rem;
  a{
  width: 4.05625rem;
  height: 100%;
  display: block;
  position: relative;
  padding: .466667rem .2rem;
  padding: 4.666667vw 2vw;
  font-size: .128rem;
  color: #333;
  background-color: #fff;
  span{
    width: 100%;
    height: 100%;
    line-height: 2.765rem;
    text-align: center;
    font-size: 0.6rem;
    color: #000;
  }
  }
 }

 }
 }
 }
 }
 
.sale-detail-box {
    position: relative;
    height: 36.94185rem;
    width: 14.6319rem;
    // width: 31.8vw;
    .sale-detail {
      width: 13.3844rem;
      height: 100%;
      padding: 0 0.624rem;
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
  
    }
  }
  .menu-box {
    height: 100%;
    width: 14.6319rem;
    padding-bottom: 0.424rem;
    padding-bottom: 4.24vw;
    overflow-y: auto;
    .menu-detail {
      width: 13.3844rem;
      height: 3.95185rem;
      margin: 0;
      padding: 0;
      display: block;
      margin-block-start: 0.25em;
      margin-block-end: 0.25em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      margin-bottom: 0.416rem;
      background: #f8f8f8;
      border-radius: 0.65rem;
    }   
    .top-title {
      display: block;
      padding-left: 0.416rem;
      font-size: 0.78rem;
      text-align: left;
      text-overflow: ellipsis;
      color: #000;
    }
  }
    .title-img-box{
      width: 13.3844rem;
      min-height: 4.3525rem;
      .title-img-box_img {
        width: 100%;
        height: 100%;
      }
    }

      
  .menu-top {
    position: relative;
    margin-left: 0.1rem;
    margin-left: 1vw;
    padding: 0.08rem 0.32rem 0.08rem 0;
    padding: 0.8vw 0.32vw 0.8vw 0;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    overflow: hidden;
    .top-title {
      margin-right: 0.05rem;
      margin-right: 0.5vw;
      font-weight: 700;
      font-size: 0.828rem;
      color: #666;
      -webkit-flex: none;
      flex: none;
    }
    span {
      display: block;
      -webkit-flex: 1;
      flex: 1;
      color: #999;
      font-size: 0.1rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  .menu-item {
    height: auto !important;
    display: flex;
    section {
      -webkit-flex: 1;
      flex: 1;
      position: relative;
      align-items: center;
      height: 3.95185rem;
      background: #f8f8f8;
      border-radius: 0.65rem;
      .fooddetail-info {
        margin: 0.5rem 0;
        position: relative;
        padding-right: 0.4rem;
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: start;
        align-items: start;
        span {
          width: 100%;
          height: 0.624rem;
          font-weight: 400;
          /* overflow: hidden; */
          font-size: 0.624rem;
          white-space: nowrap;
          width: 1.6rem;
          width: 16vw;
          text-overflow: ellipsis;
          text-align: left;
          color: black;
        }
      }
      .fooddetail-sale {
        margin: 0.5rem 0;
        color: #999;
        font-size: 0.624rem;
        line-height: 1;
        min-height: 1em;
      }
      .sale_price {
        font-size: 0.624rem;
        line-height: 0.624rem;
        color: #ff5339;
        padding-bottom: 0.093333rem;
        display: flex;
        align-items: baseline;
        bottom: 0;
        span {
        }
      }
    }
  }
  .img-bubble{
    position: relative;
    width: 2.99185rem;
    height: 2.99185rem;
    margin: 0.52rem;
    .img-box {
    width: 2.99185rem;
    height: 2.99185rem !important;
    -webkit-flex: none;
    flex: none;
    margin-right: 0.266667rem;
    margin-right: 2.666667vw;
    position: relative;
  }
  .sale-img {
    width: 100%;
    border-radius: 0.053333rem;
    border-radius: 0.533333vw;
  }
  }
  
  //footer
  .footer-box {
    z-index: 11;
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    padding-left: 2.106667rem;
    padding-left: 21.066667vw;
    background-color: rgba(61, 61, 63, 0.9);
    height: 1.28rem;
    height: 12.8vw;
    a {
      text-decoration: none;
      height: 100%;
      width: 2.8rem;
      width: 28vw;
      color: #fff;
      text-align: center;
      text-decoration: none;
      font-size: 0.2rem;
      font-weight: 700;
      -webkit-user-select: none;
      user-select: none;
      line-height: 1.28rem;
      line-height: 12.8vw;
    }
  }
  
`