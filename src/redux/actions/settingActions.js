import {
  
  CLEAR_SETTING,
  SET_SETTING,
  UPDATE_EMAIL,
  UPDATE_SETTING,
  UPDATE_SETTING_SUCCESS,
  GET_SETTINGS,
  GET_SETTINGS_SUCCESS
  
} from 'constants/constants';




export const getSettings = (lastRef) => ({
  type: GET_SETTINGS,
  payload: lastRef
});


export const getSettingsSuccess = (settings) => ({
  type: GET_SETTINGS_SUCCESS,
  payload: settings
});





export const clearProfile = () => ({
  type: CLEAR_SETTING
});

export const setSetting = (user) => ({
  type: SET_SETTING,
  payload: user
});

export const updateEmail = (password, newEmail) => ({
  type: UPDATE_EMAIL,
  payload: {
    password,
    newEmail
  }
});

export const updateSetting = (newSetting) => ({
  type: UPDATE_SETTING,
  payload: {
    updates: newSetting.updates,
    files: newSetting.files,
    credentials: newSetting.credentials
  }
});

export const updateSettingSuccess = (updates) => ({
  type: UPDATE_SETTING_SUCCESS,
  payload: updates
});
