/// external modules ///
import { useState } from "react";

/// internal modules ///
import getLocalStorage from './getLocalStorage';
import setLocalStorage from './setLocalStorage';
// import iffy from 'tools/iffy';

/***************************************
  HOOK
***************************************/
export const useLocalStorageState = (key, initValue) => {
  const [state, _setState] = useState (() => (
    getLocalStorage (key, initValue)
  ));

  const setState = (value) => {
    _setState (value);
    setLocalStorage (key, value);
  };

  return [state, setState];
};

/**************************************/
export default useLocalStorageState;
