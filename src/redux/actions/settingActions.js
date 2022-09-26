import {
  
  ADD_USER,
  ADD_SETTING_SUCCESS,
  CANCEL_GET_SETTINGS,
  CLEAR_SEARCH_STATE,
  EDIT_SETTING,
  EDIT_SETTING_SUCCESS,
  GET_SETTINGS,
  GET_SETTINGS_SUCCESS,
  REMOVE_SETTING,
  REMOVE_SETTING_SUCCESS,
  SEARCH_SETTING,
  SEARCH_SETTING_SUCCESS

} from 'constants/constants';

export const getSettings = (lastRef) => ({
  type: GET_SETTINGS,
  payload: lastRef
});

export const getSettingsSuccess = (settings) => ({
  type: GET_SETTINGS_SUCCESS,
  payload: settings
});

export const cancelGetSettings = () => ({
  type: CANCEL_GET_SETTINGS
});

export const addSetting = (setting) => ({
  type: ADD_SETTING,
  payload: setting
});

export const searchSetting = (searchKey) => ({
  type: SEARCH_SETTING,
  payload: {
    searchKey
  }
});

export const searchSettingSuccess = (settings) => ({
  type: SEARCH_SETTING_SUCCESS,
  payload: settings
});

export const clearSearchState = () => ({
  type: CLEAR_SEARCH_STATE
});

export const addSettingSuccess = (setting) => ({
  type: ADD_SETTING_SUCCESS,
  payload: setting
});

export const removeSetting = (id) => ({
  type: REMOVE_SETTING,
  payload: id
});

export const removeSettingSuccess = (id) => ({
  type: REMOVE_SETTING_SUCCESS,
  payload: id
});

export const editSetting = (id, updates) => ({
  type: EDIT_SETTING,
  payload: {
    id,
    updates
  }
});

export const editSettingSuccess = (updates) => ({
  type: EDIT_SETTING_SUCCESS,
  payload: updates
});

