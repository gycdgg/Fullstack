import React from 'react'
import styles from './styles'
import { UploadImg } from '../../common'
const mockList = [{
  uid: 1,
  name: 'koa.JPG',
  status: 'done',
  url: 'http://47.93.20.87/static/uploads/koa.JPG'
}]
class ConsoleHome extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <div className = {styles.home}>
      <div className = {styles.home__banner}>
        <div className = {styles.home__banner__header}>编辑banner图</div>
        <div className = {styles.home__banner__upload}>
          <UploadImg len = {5} fileList = {mockList}/>
        </div>
      </div>
      <div className = {styles.home__product}></div>
      <div className = {styles.home__app}></div>
    </div>
  }
}

export default ConsoleHome