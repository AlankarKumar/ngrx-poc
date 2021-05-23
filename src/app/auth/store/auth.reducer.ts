import { createReducer, on } from '@ngrx/store';
import { loginSuccess } from './auth.actions';
import { initialAuthState } from './auth.state';

export const authReducer = createReducer(
  initialAuthState,
  on(loginSuccess, (state, action) => {
    return {
      ...state,
      username: action.username,
      password: action.password,
    };
  })
);
