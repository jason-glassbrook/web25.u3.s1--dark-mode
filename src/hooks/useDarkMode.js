/// external modules ///
import { useLocalStorage } from "./storage/local";

/// internal modules ///
import { is } from '../tools/iffy';

/*//////////////////////////////////////
  TOOLS
//////////////////////////////////////*/

/***************************************
  HOOK
***************************************/
export const useDarkMode = (initMode) => {
  const [mode, setMode] = useLocalStorage ('dark_mode', initMode);

  return [mode, setMode];
};

/**************************************/
export default useDarkMode;
