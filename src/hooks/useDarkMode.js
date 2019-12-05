/// external modules ///
import React from 'react';

/// internal modules ///
import storage from 'hooks/storage';
// import iffy from 'tools/iffy';

/*//////////////////////////////////////
  TOOLS
//////////////////////////////////////*/

/***************************************
  HOOK
***************************************/
export const useDarkMode = (initMode) => {
  const [mode, setMode] = storage.local.useState ('dark_mode', initMode);

  React.useEffect (() => {}, [mode]);

  return [mode, setMode];
};

/**************************************/
export default useDarkMode;
