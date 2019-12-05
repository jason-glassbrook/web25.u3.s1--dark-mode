/*******************************************************************************
  HOOKS/STORAGE/LOCAL
*******************************************************************************/

/// imports ///
import getLocalStorage from './getLocalStorage';
import setLocalStorage from './setLocalStorage';
import useLocalStorageState from './useLocalStorageState';

/// exports ///
export {
  getLocalStorage,
  setLocalStorage,
  useLocalStorageState,
};

export default {
  get : getLocalStorage,
  set : setLocalStorage,
  useState : useLocalStorageState,
};
