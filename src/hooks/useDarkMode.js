/// external modules ///
import React from 'react';

/// internal modules ///
import storage from 'hooks/storage';
import iffy from 'tools/iffy';

/***************************************
  STATE
***************************************/
const fallback = {
  mode : false,
};

/***************************************
  HOOK
***************************************/
export const useDarkMode = (selector, initMode) => {
  const [mode, setMode] = storage.local.useState ('dark_mode', initMode);

  React.useEffect (() => {
    console.log (`>>> useDarkMode <<<`);
    if (iffy.boolean (mode)) {
      const element = document.querySelector (selector);
      
      console.log (`mode :=`, mode);
      element.classList[iffy.yes (mode) ? 'add' : 'remove'] ('dark-mode');
    }
    else {
      console.warn (`TypeError : mode is not boolean :`, mode);
      console.warn (`[fallback] mode :=`, fallback.mode);
      setMode (fallback.mode);
    }
  }, [mode]);

  return [mode, setMode];
};

/**************************************/
export default useDarkMode;
