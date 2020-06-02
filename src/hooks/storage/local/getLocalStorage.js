/// internal modules ///
import { is } from 'tools/iffy';

/***************************************
  HOOK
***************************************/
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

/**************************************/
export default getLocalStorage;
