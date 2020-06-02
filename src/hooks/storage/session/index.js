/*******************************************************************************
  HOOKS/STORAGE/SESSION
*******************************************************************************/

/// imports ///
import get from './getSessionStorage';
import set from './setSessionStorage';
import useState from './useSessionStorageState';

/// exports ///
export default {
  get,
  set,
  useState,
};

export * from './getSessionStorage';
export * from './setSessionStorage';
export * from './useSessionStorageState';
