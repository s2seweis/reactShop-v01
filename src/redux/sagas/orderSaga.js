import {
  PLACE_ORDER
} from 'constants/constants';

import { SHOP, HOME} from 'constants/routes';


import { setLoading, setRequestStatus } from 'redux/actions/miscActions';


import firebase from 'services/firebase';

import {
  all, call, put, select
} from 'redux-saga/effects';

import { displayActionMessage } from 'helpers/utils';

import PropType from 'prop-types';

import {
  placeOrderSuccess
} from '../actions/orderActions';


function* handleError(e) {
  yield put(setLoading(false));
  yield put(setRequestStatus(e?.message || 'Failed to fetch products'));
  console.log('ERROR: ', e);
}

function* handleAction(location, message, status) {
  if (location) yield call(history.push, location);
  yield call(displayActionMessage, message, status);
}



function* orderSaga({ type, payload }) {
  switch (type) {
    case PLACE_ORDER: {
      try {
        // yield initRequest();

        const key = yield call(firebase.generateKey);

        
        const order = {
          ...payload,
        };


        yield call(firebase.addOrder, key, order);
        yield put(placeOrderSuccess({
          id: key,
          ...order
        }));
        yield handleAction(undefined, 'Order succesfully placed, Thanks ', 'success');
        yield call(history.push, HOME)
        yield put(setLoading(false));
      } catch (e) {
        yield handleError(e);
        yield handleAction(undefined, `Order failed to add: ${e?.message}`, 'error');
      }
      break;
    }
  }
}

export default orderSaga;