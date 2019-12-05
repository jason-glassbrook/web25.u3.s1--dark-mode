/*******************************************************************************
  HOOKS/STORAGE
*******************************************************************************/

/// imports ///
import local from './local';
import session from './session';

/// exports ///
export default {
  local,
  session,
};

export * from './local';
export {default as local} from './local';
export * from './session';
export {default as session} from './session';
