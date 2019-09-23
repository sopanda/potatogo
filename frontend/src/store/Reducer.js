import { combineReducers } from 'redux';
import { dark } from './Theme/reducer';
import { login } from './Login/reducer';
import { registration } from './Registration/reducer';
import { location } from './UserLocation/reducer';
import { contextMenuType } from './ContextMenuType/reducer';
import { offer } from './Offer/reducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  dark,
  login,
  registration,
  location,
  contextMenuType,
  offer,
  form: formReducer
});

export default rootReducer;
