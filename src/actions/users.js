import CREATE_USERS from './types';
import UsersDataService from '../services/users.service';

export const createUsers = (data) => async (dispatch) => {
  try {
    const res = await UsersDataService.create(data);
    dispatch({ type: CREATE_USERS, paylaod: res.data });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
