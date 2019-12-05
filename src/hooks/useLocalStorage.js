/// external modules ///
import { useState } from "react";

/// internal modules ///
import { is } from '../tools/iffy';

/*//////////////////////////////////////
  TOOLS
//////////////////////////////////////*/
export const getLocalStorage = (key, fallback) => {
  let value = fallback;

  try {
    const item = window.localStorage.getItem (key);
    value = is (item) ? JSON.parse(item) : fallback;
  }
  catch (error) {
    console.error ('getLocalStorage', error);
  }

  return (value);
}

export const setLocalStorage = (key, value) => {
  try {
    window.localStorage.setItem (key, JSON.stringify (value));
  }
  catch (error) {
    console.error ('setLocalStorage', error);
  }
}

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
