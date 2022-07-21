import React from 'react'
import './style'
import { Wrapper } from './style'
import { Link } from 'react-router-dom'

export default function Goodslist({goodsMenuList}) {
  let phoneData = [],
      otherData = [];
  if (goodsMenuList.length > 0) {
      phoneData = goodsMenuList.slice(0, 6)
      otherData = goodsMenuList.slice(6)
  }

  return (
    <Wrapper>
      <div className="floor-panel-contain">
        <ul className="floor-list-box">
          {phoneData.map(
            item => 
            <li key={item.id}>
              <Link
                className='goodslist'
                to="/home"
              >
                <div>
                  <p><img src={item.img} alt="" /></p>
                </div>
              </Link>
            </li>
          )}
        </ul>
      </div>
      <div className='other-contain'>
      <ul className="floor-list-box">
          {otherData.map(
            item => 
            <li key={item.id}>
              <Link
                className='goodslist'
                to="/home"
              >
                <div>
                  <p><img src={item.img} alt="" /></p>
                </div>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </Wrapper>
  )
}
