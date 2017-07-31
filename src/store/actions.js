import  * as types from './types';

export default{
  setStatus({commit,state},status){
    commit(types.SETSTATUS,status)
  }
}
