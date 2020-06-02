/*******************************************************************************
  HOOKS/STORAGE/LOCAL
*******************************************************************************/

/// imports ///
import get from './getLocalStorage';
import set from './setLocalStorage';
import useState from './useLocalStorageState';

/// exports ///
export default {
  get,
  set,
  useState,
};

export * from './getLocalStorage';
export * from './setLocalStorage';
export * from './useLocalStorageState';
