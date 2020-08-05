import { DISPLAY_FOOTER, DISPLAY_SIDEBAR, DISPLAY_TOPBAR } from './actionTypes';

export interface Action {
  type: string;
  payload: {};
}

export const toggleFooter = (payload: boolean): Action => {
  return {
    type: DISPLAY_FOOTER,
    payload,
  };
};
export const toggleSidebar = (payload: boolean): Action => {
  return {
    type: DISPLAY_SIDEBAR,
    payload,
  };
};
export const toggleTopbar = (payload: boolean): Action => {
  return {
    type: DISPLAY_TOPBAR,
    payload,
  };
};
