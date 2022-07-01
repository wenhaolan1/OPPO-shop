import React from 'react'
import { SearchWrapper } from './style'
import { Navigate, useNavigate } from 'react-router'

export default function Search() {
    const navigate = useNavigate()
    const goSearch = () => {
        navigate('/search')
    }
    const goLogin = () => {
        navigate('/mine')
    }
  return (
    <SearchWrapper>
        <div className="header-search">        
            <div className="icon">
                  <i className="fa fa-search"></i>
              </div>      
            <div className="search-box">  
            <div className="search-eara" onClick={goSearch}>
                    <input type="text" placeholder="搜索商家,商品" />     
                </div>
                <div className="search-login" onClick={goLogin}>
                    <span>登录</span>
                </div>
            </div>
        </div>
    </SearchWrapper>
  )
}
