import axios from 'axios'


export const getBanners = () => 
    axios.get('https://www.fastmock.site/mock/b382251bce55be951b9acb71a1348802/beers/api/request')

export const getGoods = () => 
    axios.get('https://www.fastmock.site/mock/b382251bce55be951b9acb71a1348802/beers/api/request/Goods')

export const getGoodslist = () => 
    axios.get('https://www.fastmock.site/mock/b382251bce55be951b9acb71a1348802/beers/api/request/Goodslist')