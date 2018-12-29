import { createStore, combineReducers } from 'redux';

import city from './redusers/CityReduser';
import groupList from './redusers/GroupReduser';

const store = createStore(combineReducers({
  city,
  groupList
}))

export default store;