import React, { useState, useEffect} from 'react'
import { Wrapper } from './style'
import { connect } from 'react-redux'
import Search from './Search'
import Banners from './Banners'
import Goods from './Goods'
import Goodslist from './Goodslist'
import { getBannersList, getGoodsList, getGoodsMenuList } from './store/actionCreators'


 function Home(props) {
  const { bannersList, goodsList, goodsMenuList } = props
  console.log(goodsMenuList,'iiii')
  const {
    getBannersListDispatch,
    getGoodsListDispatch,
    getGoodsMenuListDispatch
  } = props
  useEffect(() => {
    getBannersListDispatch()
    getGoodsListDispatch()
    getGoodsMenuListDispatch()
  },[])
 
  return (
    <Wrapper>
      <Search />
      <Banners bannersList={bannersList}></Banners>
      <Goods goodsList={goodsList}></Goods>
      <Goodslist goodsMenuList={goodsMenuList}/>
    </Wrapper>
  )
}
const mapStateToProps = (state) => {
  return {
    bannersList: state.home.bannersList,
    goodsList: state.home.goodsList,
    goodsMenuList: state.home.goodsMenuList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getBannersListDispatch() {
      dispatch(getBannersList())
    },
    getGoodsListDispatch() {
      dispatch(getGoodsList())
    },
    getGoodsMenuListDispatch() {
      dispatch(getGoodsMenuList())
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(React.memo(Home))