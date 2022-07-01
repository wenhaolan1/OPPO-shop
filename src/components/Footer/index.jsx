import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FooterWrapper } from './style'
import classnames from 'classnames'
import { isPathPartlyExisted } from '../../utils'


export default function Footer(props) {
    const { pathname } = useLocation()
    if (isPathPartlyExisted(pathname)) return
    return (
        <FooterWrapper>
            <Link to="/home" className={classnames({active:pathname == '/home' || pathname == '/' })}>
            <i className="fa fa-home"></i>
                <span>首页</span>
            </Link>
            <Link to="/classify" className={classnames({active:pathname == '/classify'})}>
            <i className="fa fa-list"></i>
                <span>分类</span>
            </Link>
            <Link to="/shopcar" className={classnames({active:pathname == '/shopcar'})}>
            <i className="fa fa-cart-plus"></i>
                <span>购物车</span>
            </Link>
            <Link to="/mine"  className={classnames({active:pathname == '/mine'})}>
                <i className="fa fa-user"></i>
                <span>我的</span>
            </Link>
        </FooterWrapper>
    )
}
