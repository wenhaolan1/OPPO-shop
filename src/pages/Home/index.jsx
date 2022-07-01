import React, { useState, useEffect} from 'react'
import { Wrapper } from './style'
import Search from './Search'
import Banners from './Banners'
import Goods from './Goods'
import Goodslist from './Goodslist'
import { getBanners, getGoods, getGoodslist } from '../../api/request'


export default function Home() {
  const [banners, setBanners] = useState([])
  const [goods, setGoods] = useState([])
  const [goodslist, setGoodslist] = useState([])
  useEffect(() => {
    (async () => {
      let { data:bannerData } = await getBanners()
      let { data:goodsData } = await getGoods()
      let { data:goodslistData } = await getGoodslist()
      setBanners(bannerData)
      setGoods(goodsData)
      setGoodslist(goodslistData)
    })()
  },[])
  return (
    <Wrapper>
      <Search />
      <Banners banners={banners}/>
      <Goods goods={goods}/>
      <Goodslist goodslist={goodslist}/>
    </Wrapper>
  )
}
