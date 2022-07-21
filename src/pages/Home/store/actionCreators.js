import * as actionType from './constants'
import { getBannersRequest, getGoodsRequest, getGoodsMenuListRequest } from '@/api/request'

export const changeBannersList = (data) => ({
    type: actionType.CHANGE_BANNERS,
    data: data
})
export const getBannersList = () => {
    return (dispatch) => {
        getBannersRequest().then(data => {
            const action = changeBannersList(data.bannerslist)
                dispatch(action)
        })
    }
}

export const changeGoodsList = (data) => ({
    type: actionType.CHANGE_GOODS_LIST,
    data: data
})
export const getGoodsList = () => {
    return (dispatch) => {
        getGoodsRequest().then(data => {
            const action = changeGoodsList(data.goodslist)
                dispatch(action)
        })
    }
}

export const changeGoodsMenuList = (data) => ({
    type: actionType.CHANGE_GOODSMENU_LIST,
    data
})
export const getGoodsMenuList = () => {
    return (dispatch) => {
        getGoodsMenuListRequest().then(data => {
            const action = changeGoodsMenuList(data.goodsMenulist)
                dispatch(action)
        })
    }
}