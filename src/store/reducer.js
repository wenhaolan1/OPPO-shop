import { combineReducers } from 'redux'
import { reducer as classifyReducer } from '../pages/Classify/store/index'

export default combineReducers({
    classify: classifyReducer
})
