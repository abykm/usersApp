import http from '../http-common.js';

class UsersDataService {
  create(data) {
    return http.post('/users', data);
  }
}

export default new UsersDataService();
