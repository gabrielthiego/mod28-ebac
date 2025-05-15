import http from 'k6/http';
import { check } from 'k6';
import { getBaseUrl } from '../utils/utils.js'

export default class Login {
  #token;

  access(user, pass) {
    let response = http.post(`${getBaseUrl()}/login`, JSON.stringify({
      username: user,
      password: pass
    }), {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    });

    this.#token = response.json('accessToken');

    check(response, {
      "is status 201": (r) => r.status === 201,
    });
  }

  getToken() {
    return this.#token;
  }
}
