import React from 'react'
import { Carousel } from 'antd'
import { bgImg, bgImg2 } from '../../assets/img/index'
import styles from './styles.styl'
class Banner extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <Carousel autoplay className = {styles.banner}>
            <div><img src = {bgImg}/></div>
            <div><img src = {bgImg2}/></div>
            <div><img src = {bgImg}/></div>
            <div><img src = {bgImg2}/></div>
          </Carousel>
  }
}

export default Banner