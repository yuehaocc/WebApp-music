import axios from 'axios';

export const baseURL = 'http://192.168.0.145:3003';

const instance = axios.create({
  baseURL
});

instance.interceptors.response.use(
  res => res.data,
  err => {
    console.log(err, '网络错误');
  }
);

export {
  instance
}