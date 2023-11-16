/* eslint-disable indent */
import {
  ADD_USER1,
  EDIT_USER1,
  GET_USERS1,
  REMOVE_USER1,
  SEARCH_USER1
} from 'constants/constants';
import { ADMIN_USERS1 } from 'constants/routes';
import { displayActionMessage } from 'helpers/utils';
import {all, call, put, select} from 'redux-saga/effects';
import { setLoading, setRequestStatus } from 'redux/actions/miscActions';
import { history } from 'routers/AppRouter';
import firebase from 'services/firebase';
import {
  addUser1Success,
  clearSearchState, 
  editUser1Success, 
  getUsers1Success,
  removeUser1Success,
  searchUser1Success
} from '../actions/user1Actions';

function* initRequest() {
  yield put(setLoading(true));
  yield put(setRequestStatus(null));
}

function* handleError(e) {
  yield put(setLoading(false));
  yield put(setRequestStatus(e?.message || 'Failed to fetch users1'));
  console.log('ERROR: ', e);
}

function* handleAction(location, message, status) {
  if (location) yield call(history.push, location);
  yield call(displayActionMessage, message, status);
}

function* user1Saga({ type, payload }) {
  switch (type) {
    case GET_USERS1:
      try {
        yield initRequest();
        const state = yield select();
        const result = yield call(firebase.getUsers1, payload);

        if (result.users1.length === 0) {
          handleError('No items found.');
        } else {
          yield put(getUsers1Success({
            users1: result.users1,
            lastKey: result.lastKey ? result.lastKey : state.users1.lastRefKey,
            total: result.total ? result.total : state.users1.total
          }));
          yield put(setRequestStatus(''));
        }
        // yield put({ type: SET_LAST_REF_KEY, payload: result.lastKey });
        yield put(setLoading(false));
      } catch (e) {
        console.log(e);
        yield handleError(e);
      }
      break;

    case ADD_USER1: {
      try {
        yield initRequest();

        const { imageCollection } = payload;
        const key = yield call(firebase.generateKey);
        const downloadURL = yield call(firebase.storeImage, key, 'users1', payload.image);
        const image = { id: key, url: downloadURL };
        let images = [];

        if (imageCollection.length !== 0) {
          const imageKeys = yield all(imageCollection.map(() => firebase.generateKey));
          const imageUrls = yield all(imageCollection.map((img, i) => firebase.storeImage(imageKeys[i](), 'users1', img.file)));
          images = imageUrls.map((url, i) => ({
            id: imageKeys[i](),
            url
          }));
        }

        const user1 = {
          ...payload,
          image: downloadURL,
          imageCollection: [image, ...images]
        };

        yield call(firebase.addUser1, key, user1);
        yield put(addUser1Success({
          id: key,
          ...user1
        }));
        yield handleAction(ADMIN_USERS1, 'Item succesfully added', 'success');
        yield put(setLoading(false));
      } catch (e) {
        yield handleError(e);
        yield handleAction(undefined, `Item failed to add: ${e?.message}`, 'error');
      }
      break;
    }
    case EDIT_USER1: {
      try {
        yield initRequest();

        const { image, imageCollection } = payload.updates;
        let newUpdates = { ...payload.updates };

        yield call(firebase.editUser1, payload.id, newUpdates);
        yield put(editUser1Success({
          id: payload.id,
          updates: newUpdates
        }));
        yield handleAction(ADMIN_USERS1, 'Item succesfully edited', 'success');
        yield put(setLoading(false));
      } catch (e) {
        yield handleError(e);
        yield handleAction(undefined, `Item failed to edit: ${e.message}`, 'error');
      }
      break;
    }
    case REMOVE_USER1: {
      try {
        yield initRequest();
        yield call(firebase.removeUser1, payload);
        yield put(removeUser1Success(payload));
        yield put(setLoading(false));
        yield handleAction(ADMIN_USERS1, 'Item succesfully removed', 'success');
      } catch (e) {
        yield handleError(e);
        yield handleAction(undefined, `Item failed to remove: ${e.message}`, 'error');
      }
      break;
    }
    case SEARCH_USER1: {
      try {
        yield initRequest();
        // clear search data
        yield put(clearSearchState());

        const state = yield select();
        const result = yield call(firebase.searchUsers1, payload.searchKey);

        if (result.users1.length === 0) {
          yield handleError({ message: 'No user1 found.' });
          yield put(clearSearchState());
        } else {
          yield put(searchUser1Success({
            users1: result.users1,
            lastKey: result.lastKey ? result.lastKey : state.users1.searchedUsers1.lastRefKey,
            total: result.total ? result.total : state.users1.searchedUsers1.total
          }));
          yield put(setRequestStatus(''));
        }
        yield put(setLoading(false));
      } catch (e) {
        yield handleError(e);
      }
      break;
    }
    default: {
      throw new Error(`Unexpected action type ${type}`);
    }
  }
}

export default user1Saga;