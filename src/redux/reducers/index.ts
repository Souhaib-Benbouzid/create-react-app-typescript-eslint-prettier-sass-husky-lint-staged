import { combineReducers } from 'redux';
import { FooterReducer, SidebarReducer, TopbarReducer } from './page';

const rootReducer = combineReducers({
  FooterReducer,
  SidebarReducer,
  TopbarReducer,
});

export default rootReducer;
