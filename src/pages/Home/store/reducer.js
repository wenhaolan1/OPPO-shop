import * as actionTypes from './constants'

const defaultState = {
    bannersList: [],
    goodsList: [],
    goodsMenuList: []
}
export default (state = defaultState, action) => {
    switch(action.type) {
        case actionTypes.CHANGE_BANNERS:
            return {
                ...state,
                bannersList: action.data
            }
        case actionTypes.CHANGE_GOODS_LIST:
            return {
                ...state,
                goodsList: action.data
            }
        case actionTypes.CHANGE_GOODSMENU_LIST:
            return {
                ...state,
                goodsMenuList: action.data
            }
        default:
            return state;
    }
}