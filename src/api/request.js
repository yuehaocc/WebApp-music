import { instance } from './serve';

export const getBannerList = () => {
  return instance.get('/banner');
}

export const getRecommendList = () => {
  return instance.get('/personalized');
}