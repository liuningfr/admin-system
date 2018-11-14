import jsonP from 'jsonp';

export default class Axios {
  static jsonp(options) {
    return new Promise((resolve, reject) => {
      jsonP(options.url, {
         param: 'callback',
      }, (err, data) => {
        if (data.status === '1') {
          resolve(data);
        } else {
          reject(data.infocode);
        }
      });
    });
  }
}