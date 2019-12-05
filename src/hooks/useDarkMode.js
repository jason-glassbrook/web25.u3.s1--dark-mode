/// external modules ///
import storage from 'hooks/storage';

/// internal modules ///
// import iffy from 'tools/iffy';

/*//////////////////////////////////////
  TOOLS
//////////////////////////////////////*/

/***************************************
  HOOK
***************************************/
export const useDarkMode = (initMode) => {
  const [mode, setMode] = storage.local.useState ('dark_mode', initMode);

  return [mode, setMode];
};

/**************************************/
export default useDarkMode;
