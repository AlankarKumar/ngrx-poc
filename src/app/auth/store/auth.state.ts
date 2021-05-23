export interface AuthState {
  username: string;
  password: string;
}

export const initialAuthState: AuthState = {
  username: undefined,
  password: undefined,
};
