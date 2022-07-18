import * as actionTypes from './constants'

const defaultState = {
    classifyList: []
}
// console.log(classifyList,'9909')
export default (state = defaultState, action) => {
    switch(action.type) {
        case actionTypes.CHANGE_CLASSIFY_LIST:
            return {
                ...state,
                classifyList: action.data
            }
            
        default:
            return state;
    }
}
// console.log(defaultState,'909')

