import jsonP from 'jsonp';
import axios from 'axios';
import { message } from 'antd';
export default class Axios {
  static jsonp(options) {
    return new Promise((resolve, reject) => {
      jsonP(
        options.url,
        {
          param: 'callback'
        },
        (err, data) => {
          if (data.status === '1') {
            resolve(data);
          } else {
            reject(data.infocode);
          }
        }
      );
    });
  }
  static ajax(options) {
    const baseURL =
      'https://www.easy-mock.com/mock/5bf3fb5258243e76789c204c/mockapi/';
    return new Promise((resolve, reject) => {
      axios({
        url: options.url,
        method: 'get',
        baseURL,
        timeout: 5000,
        params: options.data || ''
      }).then(response => {
        if (response.status === 200) {
          const res = response.data;
          if (res.code === 0) {
            resolve(res);
          } else {
            message.error(res.msg);
          }
        } else {
          reject(response.data);
        }
      });
    });
  }
}
