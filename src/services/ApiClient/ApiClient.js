import HttpClient from './http/HttpClient';
import configuredStore from '../../redux/store';

class ApiClient {
  constructor(defaults = {
    baseURL: 'https://api.whimlist.me',
  }) {
    this.http = new HttpClient(defaults);

    this.http.interceptors.request.push((url, options) => {
      const { auth } = configuredStore.store.getState();

      if (auth && auth.isLoggedIn) {
        const { access_token: accessToken } = auth.user.jwt_token;
        // eslint-disable-next-line
        options.headers.Authorization = `Bearer ${accessToken}`;
      }

      return { url, options };
    });
    this.http.interceptors.response.push((response) => {
      setTimeout(async () => {
        console.log('Response:');
        console.log(`url: ${(await response).url}`);
        console.log(`status: ${(await response).status}`);
        console.log('--------------------------------------------------');
      });
      return response;
    });
  }

  sendRequest(url, options) {
    return this.http.sendRequest(url, options);
  }
}

export default ApiClient;
