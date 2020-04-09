import { fromJS } from 'immutable';
import * as actionTypes from './constant';

import { getBannerList, getRecommendList } from '../../../api/request';

export const updateBannerList = (data) => ({
  type: actionTypes.CHANGE_BANNER,
  data: fromJS(data)
})

export const updateRecommendList = (data) => ({
  type: actionTypes.CHANGE_RECOMMEND_LIST,
  data: fromJS(data)
})

export const _getBannerList = () => {
  return (dispatch) => {
    getBannerList().then(data => {
      dispatch(updateBannerList(data.banners));
    }).catch(()=>{
      console.log('banner数据传输错误')
    })
  }
}

export const _getRecommendList = () => {
  return (dispatch) => {
    getRecommendList().then(data => {
      dispatch(updateRecommendList(data.result));
    }).catch(()=>{
      console.log('推荐歌单数据传输错误')
    })
  }
}