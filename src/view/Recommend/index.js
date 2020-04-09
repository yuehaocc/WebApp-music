import React from 'react';

import Scroll from '../../baseComponents/scroll/index';
import Slider from '../../components/slider';
import RecommendList from '../../components/list';

import { Content } from './style'

function Recommend() {
  const bannerList = [1, 2, 3, 4].map(item => {
    return {
      imageUrl: "http://p1.music.126.net/ZYLJ2oZn74yUz5x8NBGkVA==/109951164331219056.jpg"
    }
  })

  const recommendList = [1, 2, 3, 4, 6, 7, 8, 9, 10].map((item, index) => {
    return {
      id: index,
      picUrl: "http://p1.music.126.net/ZYLJ2oZn74yUz5x8NBGkVA==/109951164331219056.jpg",
      playCount: index * Math.random(1000) * 1000,
      name: `name ${index}`
    }
  })
  console.log('bannerList', bannerList)
  console.log('recommendList', recommendList)


  return (
    <Content>
      <Scroll>
        <div>
          <Slider bannerList={bannerList}></Slider>
          <RecommendList recommendList={recommendList}></RecommendList>
        </div>
      </Scroll>
    </Content>

  )
}

export default React.memo(Recommend)