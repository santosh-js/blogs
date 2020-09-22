// getting all the user objects as array
import { USERS } from "../../database/UsersDB";

// USER ID = "unique_session_id"
export const USER_SESSION = "unique_session_id";

export const FIRST_INDEX = 0;

// user constructor for new signups
function User(id, firstName, lastName, email, username, password) {
  this.id = id;
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.username = username;
  this.password = password;
}

// user actions
class AuthService {
  logout() {
    sessionStorage.removeItem(USER_SESSION);
  }

  isLoggedIn() {
    if (sessionStorage.getItem(USER_SESSION) === null) return false;
    return true;
  }

  // for logins
  loginService(username, password) {
    const userArr = USERS.filter((user) => {
      return user.username === username;
    });
    if (userArr.length !== 0) {
      // if ([{ password }] === password) {
      if (userArr[FIRST_INDEX].password === password) {
        // use window.atob() method to decode from base64
        const base64user = window.btoa(username);
        sessionStorage.setItem(USER_SESSION, base64user);
        return true;
      }
      return false;
    }
  }

  // for new signups
  registrationService({ id, firstName, lastName, email, username, password }) {
    const oldLen = USERS.length;
    const newLen = USERS.push(
      new User(id, firstName, lastName, email, username, password)
    );

    // didnt use Math.floor(Math.random(...)*10)
    if (oldLen + 1 === newLen) return true;
    return false;
  }
}

export default new AuthService();
