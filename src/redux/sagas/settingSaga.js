import { UPDATE_EMAIL, UPDATE_SETTINGS, ADD_SETTING, GET_SETTING } from 'constants/constants';
import { ADMIN_SETTINGS, ADMIN_USERS1 } from 'constants/routes';
import { displayActionMessage } from 'helpers/utils';
import { call, put, select } from 'redux-saga/effects';
import { history } from 'routers/AppRouter';
import firebase from 'services/firebase';
import { updateSettingsSuccess } from '../actions/settingActions';
import { addSettingSuccess } from '../actions/settingActions';
import { getSettingSuccess } from '../actions/settingActions';
import { setLoading, setRequestStatus } from 'redux/actions/miscActions';




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



    case GET_SETTING:
      try {



        // var docRef = db.collection("settings").doc("TuXsosfQP6SkWdBrnLpqGqhzEbJ3");

        // docRef.get().then((doc) => {
        //   if (doc.exists) {
        //     console.log("Document data:", doc.data());
        //   } else {
        //     // doc.data() will be undefined in this case
        //     console.log("No such document!");
        //   }
        // }).catch((error) => {
        //   console.log("Error getting document:", error);
        // });







        const snapshot = yield call(firebase.docRef);

        if (snapshot.exists) { // if setting exists in database
          console.log("Document data:", snapshot.data());

          yield put(getSettingSuccess(settings));

        } else {

          console.log("No such document!");
        }



      } catch (e) {
        console.log(e);
        yield handleError(e);
      }
      break;

  }


}

export default settingSaga;
