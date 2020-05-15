export default class UserRepository {
  constructor() {
    this._users = ['tadeu', 'gui', 'tom'];
  }

  getUser() {
    return this._users;
  }
}
