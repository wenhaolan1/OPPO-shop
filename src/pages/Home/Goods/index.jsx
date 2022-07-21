import React from 'react'
import './style'
import { Wrapper } from './style'
import { Link } from 'react-router-dom'
import { memo } from 'react'


function Goods({goodsList}) {
  return (
    <Wrapper>
        {goodsList && goodsList.map(
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
export default memo(Goods)