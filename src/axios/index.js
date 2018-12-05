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
    const loading = document.getElementById('ajaxLoading');
    loading.style.display = 'block';
    const baseURL =
      'https://www.easy-mock.com/mock/5bf3fb5258243e76789c204c/mockapi/';
    const { url, method, params } = options;
    return new Promise((resolve, reject) => {
      axios({
        url,
        method,
        params: params || '',
        baseURL,
        timeout: 5000
      })
        .then(response => {
          loading.style.display = 'none';
          if (response.status === 200) {
            const res = response.data;
            if (res.code === 0) {
              resolve(res);
            } else {
              message.error(res.msg);
            }
          } else {
            loading.style.display = 'none';
            message.error(response.data.msg);
            reject(response.data);
          }
        })
        .catch(err => {
          loading.style.display = 'none';
          message.error('请求异常');
          reject(err);
        });
    });
  }
  static requestList(_this, options) {
    this.ajax(options).then(res => {
      if (res && res.data) {
        _this.setState({ list: res.data });
      }
    });
  }
}
