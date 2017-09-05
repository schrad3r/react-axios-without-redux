import axios from 'axios';
import apiURL from './api';

export const getCustomerList = function() {
  axios.get( apiURL ).then( response => response.data );
}

export const postCustomer = function(customer) {
  return axios.post( apiURL, customer).then( response => {
    return response.data 
  })
}