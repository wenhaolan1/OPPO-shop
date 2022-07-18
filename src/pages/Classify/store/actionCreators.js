import * as actionType from './constants'
import { getClassifyListRequest } from '@/api/request'

export const changeClassifyList = (data) => ({
    type: actionType.CHANGE_CLASSIFY_LIST,
    data: data
})
export const getClassifyList = () => {
    return (dispatch) => {
        getClassifyListRequest().then(data => {
            console.log(data,'-------------------')
            const action = changeClassifyList(data.data.classifylist)
                dispatch(action)
            console.log(action,'----')
        })
    }
}