import * as types from './types'

export default{

  [types.SETSTATUS](state,status){
      state.loadStatus=status
  }

}
