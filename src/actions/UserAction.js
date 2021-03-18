import { LOGIN, LOGOUT } from '../common/ActionType';
import { store } from '../../App'

export function SignIn() {
  store.dispatch({
    type: LOGIN,
  });
}

export function SignOut() {
  store.dispatch({
    type: LOGOUT
  });
}
