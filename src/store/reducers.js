import { setCity } from './actionsType';

// 定义初始数据
let defaultState = {
  curCity: '深圳'
}

/**
 *
 * @param {Object} prevState 之前最后的数据状态
 * @param {Object} action 此次动作对象
 */
export default function (prevState = defaultState, action) {
  console.log(prevState, action);

  // 引用类型，深拷贝，两者不会影响
  let state = JSON.parse(JSON.stringify(prevState));
  console.log(state);

  // 判断动作
  if (action.type === setCity) {
    state.curCity = JSON.parse(JSON.stringify(action.data));
    console.log(state);
  }

  return state;
}