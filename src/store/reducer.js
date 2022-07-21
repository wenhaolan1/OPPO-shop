import { combineReducers } from 'redux'
import { reducer as classifyReducer } from '../pages/Classify/store/index'
import { reducer as homeReducer } from '../pages/Home/store/index'

export default combineReducers({
    classify: classifyReducer,
    home: homeReducer
})
