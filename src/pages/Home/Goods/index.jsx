import React from 'react'
import './style'
import { Wrapper } from './style'
import { Link } from 'react-router-dom'
import propTypes from 'prop-types'

export default function Goods({goods}) {

  return (
    <Wrapper>
        {goods.map(
            goods =>
                <Link
                    className='goodslist' 
                    to="/home"
                    key = {goods.id}
                >
                <div>
                    <p><img src={goods.img} alt="" /></p>
                    <span>{goods.title}</span>
                </div>
           </Link>
         )}
    </Wrapper>
  )
}

Goods.propTypes = {
    goods:propTypes.array.isRequired
  }
  