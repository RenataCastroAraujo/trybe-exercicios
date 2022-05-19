import { createStore } from 'redux';

const ESTADO_INICIAL = {
  login: false,
  email: '',
}

const reducer = (state = ESTADO_INICIAL) => {
  return state;
}
const store = createStore(reducer);

console.log(store.getState());

