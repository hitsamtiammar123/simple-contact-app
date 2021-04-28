import * as CONST from './constants';
import { createStore } from 'redux'

const initialStates = {
  listData: [
    {
      "id": new Date().getTime(),
      "firstName": "Bilbo",
      "lastName": "Baggins",
      "age": 12,
      "photo": "http://vignette1.wikia.nocookie.net/lotr/images/6/68/Bilbo_baggins.jpg/revision/latest?cb=20130202022550"
    },
    {
      "firstName": "Nama",
      "lastName": "Hebat",
      "age": 111,
      "photo": "http://vignette1.wikia.nocookie.net/lotr/images/6/68/Bilbo_baggins.jpg/revision/latest?cb=20130202022550",
      "id": new Date().getTime() + 1
    },
    {
      "firstName": "Saya",
      "lastName": "Lala",
      "age": 60,
      "photo": "http://vignette1.wikia.nocookie.net/lotr/images/6/68/Bilbo_baggins.jpg/revision/latest?cb=20130202022550",
      "id": new Date().getTime() + 2
    }
  ],
  action: '',
};

function reducers(state = initialStates, action){
  const { payload, type } = action;
  const actions = {
    [CONST.SET_DATA]: () => ({
      ...state,
      listData: payload,
      action: type,
    }),
    [CONST.ADD_DATA]: () => ({
      ...state,
      listData: [...state.listData, {
        ...payload,
        id: new Date().getTime()
      }],
      action: type,
    }),
    DEFAULT: () => state
  };
  return (actions[type] || actions.DEFAULT)();
}

let store = createStore(reducers)

export {
  store
}