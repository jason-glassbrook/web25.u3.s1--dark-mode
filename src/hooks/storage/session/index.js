/*******************************************************************************
  HOOKS/STORAGE/SESSION
*******************************************************************************/

/// imports ///
import getSessionStorage from './getSessionStorage';
import setSessionStorage from './setSessionStorage';
import useSessionStorageState from './useSessionStorageState';

/// exports ///
export {
  getSessionStorage,
  setSessionStorage,
  useSessionStorageState,
};

export default {
  get : getSessionStorage,
  set : setSessionStorage,
  useState : useSessionStorageState,
};
