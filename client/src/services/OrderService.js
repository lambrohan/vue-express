import Api from './api';

export default {
  createOrder(payload){
    return Api().post('pay',payload)
 } 
}