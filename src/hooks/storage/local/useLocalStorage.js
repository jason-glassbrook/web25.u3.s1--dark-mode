/// external modules ///
import { useState } from "react";

/// internal modules ///
import getLocalStorage from './getLocalStorage';
import setLocalStorage from './setLocalStorage';
// import iffy from '../../../tools/iffy';

/***************************************
  HOOK
***************************************/
export const useLocalStorage = (key, initValue) => {
  const [value, setValue_] = useState (() => (
    getLocalStorage (key, initValue)
  ));

  const setValue = (value) => {
    setValue_ (value);
    setLocalStorage (key, value);
  };

  return [value, setValue];
};

/**************************************/
export default useLocalStorage;
