export default function groupList (state=[], action) {

  switch ( action.type ) {
    case 'ADD_LIST':
      return [...state, action.name]

    case "DEL_LIST":
      let listArr = [...state];
      listArr.splice(action.name, 1);
      console.log(listArr);
      return listArr

    default:
      return state
  }

}