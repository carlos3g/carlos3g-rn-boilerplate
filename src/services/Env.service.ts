import { API_DNS, RN_AUTH_TOKEN_KEY } from '@env';

export class EnvService {
  public static get API_DNS() {
    return API_DNS;
  }

  public static get RN_AUTH_TOKEN_KEY() {
    return RN_AUTH_TOKEN_KEY;
  }
}
