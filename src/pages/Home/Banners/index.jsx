import React, { memo, useEffect } from 'react'
import propTypes from 'prop-types'
import './style'
import { BannersWrapper } from './style'
import Swiper from 'swiper'
import { Link } from 'react-router-dom'

 function Banners({bannersList}) {
    let swiper = null;
    useEffect(() => {
      if(swiper){
        return
      }
      swiper = new Swiper('.btn-banners',{
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay:{ //自动轮播
          delay:3000
      }
      })
    },[])

    const renderBtnBannersPage1 = () => {
        let items = bannersList && bannersList.slice(0,1);
          return items && items.map(item => {
          return (
              <Link 
                  to="/eleme/all"
                  className="swiper-item"
                  key={item.id}
                  >
                  <div>
                      <p>
                          <img src={item.img} />
                      </p>
                  </div>
              </Link>
          )
      })
  }
  const renderBtnBannersPage2 = () => {
    let items = bannersList && bannersList.slice(1,2);
    return items && items.map(item => {
        return (
            <Link 
                to="/eleme/all"
                className="swiper-item"
                key={item.id}
                >
                <div>
                    <p>
                        <img src={item.img} />
                    </p>
                </div>
            </Link>
        )
    })
}
const renderBtnBannersPage3 = () => {
  let items = bannersList && bannersList.slice(2,3);
  return items && items.map(item => {
      return (
          <Link 
              to="/eleme/all"
              className="swiper-item"
              key={item.id}
              >
              <div>
                  <p>
                      <img src={item.img} />
                  </p>
              </div>
          </Link>
      )
  })
}
const renderBtnBannersPage4 = () => {
  let items = bannersList && bannersList.slice(3,4);
  return items && items.map(item => {
      return (
          <Link 
              to="/eleme/all"
              className="swiper-item"
              key={item.id}
              >
              <div>
                  <p>
                      <img src={item.img} />
                  </p>
              </div>
          </Link>
      )
  })
}
const renderBtnBannersPage5 = () => {
  let items = bannersList && bannersList.slice(4,5);
  return items && items.map(item => {
      return (
          <Link 
              to="/eleme/all"
              className="swiper-item"
              key={item.id}
              >
              <div>
                  <p>
                      <img src={item.img} />
                  </p>
              </div>
          </Link>
      )
  })
}

  return (
    <BannersWrapper>
        <div className="btn-banners swiper-container swiper">
            <div className="swiper-wrapper">
                <div className="swiper-slide">
                    {renderBtnBannersPage1()}
                </div>
                <div className="swiper-slide">
                    {renderBtnBannersPage2()}
                </div>
                <div className="swiper-slide">
                    {renderBtnBannersPage3()}
                </div>
                <div className="swiper-slide">
                    {renderBtnBannersPage4()}
                </div>
                <div className="swiper-slide">
                    {renderBtnBannersPage5()}
                </div>
            </div>
            <div className="swiper-pagination"></div>
        </div>
    </BannersWrapper>
  )
}

export default memo(Banners)