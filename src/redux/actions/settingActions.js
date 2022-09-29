import {
  
  CLEAR_SETTINGS,
  SET_SETTINGS,
  UPDATE_EMAIL,
  UPDATE_SETTINGS,
  UPDATE_SETTINGS_SUCCESS
  
} from 'constants/constants';

export const clearSettings = () => ({
  type: CLEAR_SETTINGS
});

export const setSettings= (settings) => ({
  type: SET_SETTINGS,
  payload: settings
});

export const updateEmail = (password, newEmail) => ({
  type: UPDATE_EMAIL,
  payload: {
    password,
    newEmail
  }
});

export const updateSettings = (newSettings) => ({
  type: UPDATE_SETTINGS,
  payload: {
    updates: newSettings.updates,
    files: newSettings.files,
    credentials: newSettings.credentials
  }
});

export const updateSettingsSuccess = (updates) => ({
  type: UPDATE_SETTINGS_SUCCESS,
  payload: updates
});
