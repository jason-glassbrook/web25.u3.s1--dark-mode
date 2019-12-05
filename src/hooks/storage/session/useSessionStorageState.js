/// external modules ///
import { useState } from "react";

/// internal modules ///
import getSessionStorage from './getSessionStorage';
import setSessionStorage from './setSessionStorage';
// import iffy from 'tools/iffy';

/***************************************
  HOOK
***************************************/
export const useSessionStorageState = (key, initValue) => {
  const [state, _setState] = useState (() => (
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
