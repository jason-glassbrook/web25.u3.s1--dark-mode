/// external modules ///
import React from 'react'

/// internal modules ///
import getSessionStorage from './getSessionStorage';
import setSessionStorage from './setSessionStorage';
// import iffy from 'tools/iffy';

/***************************************
  HOOK
***************************************/
export const useSessionStorageState = (key, initValue) => {
  const [state, _setState] = React.useState (() => (
    getSessionStorage (key, initValue)
  ));

  const setState = (value) => {
    _setState (value);
    setSessionStorage (key, value);
  };

  return [state, setState];
};

/**************************************/
export default useSessionStorageState;
