/// internal modules ///
// import iffy from '../../../tools/iffy';

/***************************************
  HOOK
***************************************/
export const setSessionStorage = (key, value) => {
  try {
    window.sessionStorage.setItem (key, JSON.stringify (value));
  }
  catch (error) {
    console.error ('setSessionStorage', error);
  }
}

/**************************************/
export default setSessionStorage;
