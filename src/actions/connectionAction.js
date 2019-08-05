import axios from 'axios';
import 'babel-polyfill';
import { TEST_CONNECTION } from './types';

export const testConnection = () => async (dispatch) => {
  let connectionStatus;

  await axios.get('https://contactmanager-api.herokuapp.com/contacts')
    .then((res) => {
      console.log(res.status);
      connectionStatus = true;
    })
    .catch((res) => {
      console.log(res.status);
      connectionStatus = false;
    });

  dispatch({
    type: TEST_CONNECTION,
    payload: connectionStatus,
  });
};

export const test = () => {
  console.log('Empty test value');
};
