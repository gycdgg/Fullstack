import React from 'react'
import styles from './styles'
import { UploadImg, UploadTable } from '../../common'

class ConsoleHome extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <div className = {styles.home}>
      <div className = {styles.home__banner}>
        <div className = {styles.home__banner__header}>编辑banner图（3-5张）</div>
        <div className = {styles.home__banner__upload}>
          <UploadImg len = {5}  category = "home_banner"/>
        </div>
      </div>
      <hr/>
      <div className = {styles.home__product}>
        <div className = {styles.home__banner__header}>编辑product center</div>
        <div className = {styles.home__banner__upload}>
          <UploadTable category = "home_banner"/>
        </div>
      </div>
      <div className = {styles.home__app}></div>
    </div>
  }
}

export default ConsoleHome