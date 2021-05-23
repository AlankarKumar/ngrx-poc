import { createAction, props } from '@ngrx/store';

export const loginSuccess = createAction(
  '[Login Page] User Login Success',
  props<{ username: string; password: string }>()
);
