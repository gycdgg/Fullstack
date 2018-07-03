import React from 'react'
import styles from './styles'
import { UploadImg } from '../../common'
import  fetch from '$fetch'

class ConsoleHome extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    fetch('/api/admin/pictures?category=home_banner', {
      method: 'GET'
    }).then(res => {
      console.log(res)
    })
  }
  render() {
    return <div className = {styles.home}>
      <div className = {styles.home__banner}>
        <div className = {styles.home__banner__header}>编辑banner图</div>
        <div className = {styles.home__banner__upload}>
          <UploadImg len = {5}  category = "home_banner"/>
        </div>
      </div>
      <div className = {styles.home__product}></div>
      <div className = {styles.home__app}></div>
    </div>
  }
}

export default ConsoleHome