import { UPDATE_EMAIL, UPDATE_SETTING, GET_SETTINGS } from 'constants/constants';
import { ADMIN_SETTINGS } from 'constants/routes';
import { displayActionMessage } from 'helpers/utils';
import { call, put, select, all } from 'redux-saga/effects';
import { history } from 'routers/AppRouter';
import firebase from 'services/firebase';
import { setLoading, setRequestStatus } from '../actions/miscActions';
import { 
  
  updateSettingSuccess,
  
  getSettingsSuccess

 } from '../actions/settingActions';




function* initRequest() {
  yield put(setLoading(true));
  yield put(setRequestStatus(null));
}

function* handleError(e) {
  yield put(setLoading(false));
  yield put(setRequestStatus(e?.message || 'Failed to fetch products'));
  console.log('ERROR: ', e);
}

function* handleAction(location, message, status) {
  if (location) yield call(history.push, location);
  yield call(displayActionMessage, message, status);
}



function* settingSaga({ type, payload }) {
  switch (type) {
    
    
    
    
    case GET_SETTINGS:
      try {
        yield initRequest();
        const state = yield select();
        const result = yield call(firebase.getSettings, payload);

        if (result.settings.length === 0) {
          handleError('No items found.');
        } else {
          yield put(getSettingsSuccess({
            settings: result.settings,
            // lastKey: result.lastKey ? result.lastKey : state.settings.lastRefKey,
            total: result.total ? result.total : state.settings.total,
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
    
    
    
    
    
    
    
    
    
    
    case UPDATE_EMAIL: {
      try {
        yield put(setLoading(false));
        yield call(firebase.updateEmail, payload.password, payload.newEmail);

        yield put(setLoading(false));
        yield call(history.push, '/profile');
        yield call(displayActionMessage, 'Email Updated Successfully!', 'success');
      } catch (e) {
        console.log(e.message);
      }
      break;
    }


  



    case UPDATE_SETTING: {
      try {
        const state = yield select();
        const { email, password } = payload.credentials;
        const { avatarFile, bannerFile } = payload.files;

        yield put(setLoading(true));

        // if email & password exist && the email has been edited
        // update the email
        if (email && password && email !== state.profile.email) {
          yield call(firebase.updateEmail, password, email);
        }

        if (avatarFile || bannerFile) {
          const bannerURL = bannerFile ? yield call(firebase.storeImage, state.auth.id, 'banner', bannerFile) : payload.updates.banner;
          const avatarURL = avatarFile ? yield call(firebase.storeImage, state.auth.id, 'avatar', avatarFile) : payload.updates.avatar;
          const updates = { ...payload.updates, avatar: avatarURL, banner: bannerURL };

          yield call(firebase.updateSetting, state.auth.id, updates);
          yield put(updateSettingSuccess(updates));
        } else {
          yield call(firebase.updateSetting, state.auth.id, payload.updates);
          yield put(updateSettingSuccess(payload.updates));
        }

        yield put(setLoading(false));
        yield call(history.push, ADMIN_SETTINGS);
        yield call(displayActionMessage, 'Profile Updated Successfully!', 'success');
      } catch (e) {
        console.log(e);
        yield put(setLoading(false));
        if (e.code === 'auth/wrong-password') {
          yield call(displayActionMessage, 'Wrong password, profile update failed :(', 'error');
        } else {
          yield call(displayActionMessage, `:( Failed to update profile. ${e.message ? e.message : ''}`, 'error');
        }
      }
      break;
    }
    default: {
      throw new Error('Unexpected action type.');
    }
  }
}

export default settingSaga;
