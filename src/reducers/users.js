import CREATE_USERS from '../actions/types.js';

const initailState = [];

function usersReducer(users = initailState, action) {
  const { type, payload } = action;
  switch (type) {
    case 'CREATE_USERS':
      return [...users, payload];
    default:
      return users;
  }
}
export default usersReducer;
