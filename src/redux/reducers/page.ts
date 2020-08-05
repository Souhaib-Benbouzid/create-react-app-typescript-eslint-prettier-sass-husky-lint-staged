import {
  DISPLAY_FOOTER,
  DISPLAY_TOPBAR,
  DISPLAY_SIDEBAR,
} from '../actions/actionTypes';

import { Action } from '../actions';
import { initialState } from '../initialState';

export const TopbarReducer = (state = initialState.Topbar, action: Action) => {
  switch (action.type) {
    case DISPLAY_TOPBAR:
      return { ...state, display: action.payload };
    default:
      return state;
  }
};
export const FooterReducer = (state = initialState.Topbar, action: Action) => {
  switch (action.type) {
    case DISPLAY_FOOTER:
      return { ...state, display: action.payload };
    default:
      return state;
  }
};
export const SidebarReducer = (state = initialState.Topbar, action: Action) => {
  switch (action.type) {
    case DISPLAY_SIDEBAR:
      return { ...state, display: action.payload };
    default:
      return state;
  }
};
