/// external modules ///
import { useState } from "react";

/// internal modules ///
import { is } from '../tools/iffy';

/*//////////////////////////////////////
  TOOLS
//////////////////////////////////////*/
export const getLocalStorage = (key, fallback) => {
  const item = window.localStorage.getItem (key);

  return (
    is (item) ? JSON.parse(item) : fallback
  );
}

export const setLocalStorage = (key, value) => {
  let status;

  try {
    window.localStorage.setItem (key, JSON.stringify (value));
    status = true;
  }
  catch (error) {
    console.error ('setLocalStorage', error);
    status = false;
  }
  
  return (status);
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
