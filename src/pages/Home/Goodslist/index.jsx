import React from 'react'
import './style'
import { Wrapper } from './style'
import { Link } from 'react-router-dom'
import propTypes from 'prop-types'

export default function Goodslist({goodslist}) {
  let phoneData = [],
      otherData = [];
  if (goodslist.length > 0) {
      phoneData = goodslist.slice(0, 6)
      otherData = goodslist.slice(6)
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

Goodslist.propTypes = {
  goodslist:propTypes.array.isRequired
}