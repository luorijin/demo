
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
var initstate={
    card: {
        name: 'Jack',
        picture: 'a.jpg'
      },
      dialog: {
        status: false
      },
    data:[{id:"sss",label:"罗小金额"}]
}

function cardReducer(state, action) {
    switch (action.type) {
      case 'CHANGE_NAME':
      return {
        name: action.name, // 使用action携带的新name
        picture:state.picture  // 不需要修改，使用旧state的值
      }
  
      default:
      return state  // 没有匹配的action type，返回原来的state
    }
  }
  
  function dialogReducer(state, action) {
    switch (action.type) {
      case 'SHOW_DIALOG':
      return {
        status: true
      }
  
      case 'CLOSE_DIALOG':
      return {
        status: false
      }
  
      default:
      return state  // 没有匹配的action type，返回原来的state
    }
  }
  function baseData(state,action){
      if(action.type==='SAVE_REDUCER'){
        return action.data;
      }
    return state;
  }
  function reducer(state, action) {
    return {
      card: cardReducer(state.card, action),
      dialog: dialogReducer(state.dialog, action),
      data:baseData(state.data,action)
    }
  }

export default createStore(reducer,initstate,applyMiddleware(thunk));