import { UPDATE_EMAIL, UPDATE_SETTINGS, ADD_SETTING, GET_SETTING, UPDATE_SETTING } from 'constants/constants';
import { ADMIN_SETTINGS, ADMIN_USERS1 } from 'constants/routes';
import { displayActionMessage } from 'helpers/utils';
import { call, put, select } from 'redux-saga/effects';
import { history } from 'routers/AppRouter';
import firebase from 'services/firebase';
import { updateSettingsSuccess } from '../actions/settingActions';
import { addSettingSuccess } from '../actions/settingActions';
import { getSettingSuccess } from '../actions/settingActions';
import { setLoading, setRequestStatus } from 'redux/actions/miscActions';

import { clearProfile, setProfile } from 'redux/actions/profileActions';


import React, { useState } from 'react';

import { useDispatch } from 'react-redux';






// import firebase from 'firebase/app';
import 'firebase/firestore';

// import { doc, getDoc } from "firebase/firestore";


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

    case ADD_SETTING: {
      try {
        yield initRequest();

        const key = yield call(firebase.generateKey);


        const setting = {
          ...payload,
        };


        yield call(firebase.
          addSetting,
          key,
          setting);

        // yield put(placeOrderSuccess({
        //   id: key,
        //   ...order
        // }));

        yield handleAction(ADMIN_SETTINGS, 'Settings succesfully added', 'success');
        // yield put(clearBasket());
        // yield call(firebase.saveBasketItems(basket, firebase.auth.currentUser.uid));

        yield put(setLoading(false));
        // yield call(history.push, SHOP)
      } catch (e) {
        yield handleError(e);
        yield handleAction(undefined, `Setting failed to add: ${e?.message}`, 'error');
      }
      break;
    }



    case UPDATE_SETTING: {
      try {
        const state = yield select();
        // const { email, password } = payload.credentials;
        const { avatarFile, bannerFile } = payload.files;

        yield put(setLoading(true));

        // if email & password exist && the email has been edited
        // update the email
        // if (email && password && email !== state.profile.email) {
        //   yield call(firebase.updateEmail, password, email);
        // }

        if (avatarFile || bannerFile) {
          const bannerURL = bannerFile ? yield call(firebase.storeImage, state.auth.id, 'banner', bannerFile) : payload.updates.banner;
          const avatarURL = avatarFile ? yield call(firebase.storeImage, state.auth.id, 'avatar', avatarFile) : payload.updates.avatar;
          const updates = { ...payload.updates, avatar: avatarURL, banner: bannerURL };

          console.log("Current data: ", updates)

          yield call(firebase.updateSetting, state.auth.id, updates);
          yield put(updateSettingsSuccess(updates));
        } else {
          yield call(firebase.updateSetting, state.auth.id, payload.updates);
          yield put(updateSettingsSuccess(payload.updates));
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



    case GET_SETTING:
      try {



        const snapshot = yield call(firebase.docRef );

        // console.log("Current data: ", snapshot);

        if (snapshot.data()) { // if user exists in database
          const test = snapshot.data();

          // console.log("Current data: ", test);

  
          yield put(getSettingSuccess(test));
  
  
          // yield put(setSetting(user));
  
  
  
  
          // yield put(setBasketItems(user.basket));
          // yield put(setBasketItems(user.basket));
          // yield put(signInSuccess({
          //   id: payload.uid,
          //   role: user.role,
          //   provider: payload.providerData[0].providerId
          // }));
        }

        

        // settings.get().then((doc) => {
        //   if (doc.exists) {
        //     const data = doc.data();


        //    put(getSettingSuccess(data))




        //     console.log("Document data:", data);
        //   } 
          
        //   else {
        //     // doc.data() will be undefined in this case
        //     console.log("No such document!");
        //   }
        // })
        
        
        // .catch((error) => {
        //   console.log("Error getting document:", error);
        // });




      } 


      
      
      catch (e) {
        console.log(e);
        yield handleError(e);
      }
      break;

  }


}

export default settingSaga;
