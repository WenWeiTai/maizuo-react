export default function groupList (state=[], action) {

  switch ( action.type ) {
    case 'ADD_LIST':
      return [...state, action.name]
    default:
      return state
  }

}