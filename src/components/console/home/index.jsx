import React from 'react'
import styles from './styles'
import { UploadImg, UploadTable } from '../../common'

class ConsoleHome extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <div className = { styles.home }>
      <div className = { styles.home__banner }>
        <div className = { styles.home__banner__header }>编辑banner图（3-5张）</div>
        <div className = { styles.home__banner__upload }>
          <UploadImg category = "home_banner"  len = { 5 }/>
        </div>
      </div>
      <hr className = { styles.home__hr }/>
      <div className = { styles.home__product }>
        <div className = { styles.home__banner__header }>编辑product center(只能编辑图片和标题)</div>
        <div className = { styles.home__banner__upload }>
          <UploadTable category = "home_product" editAble = { [ 'title', 'url' ] }/>
        </div>
      </div>
      <hr className = { styles.home__hr }/>
      <div className = { styles.home__app }>
      <div className = { styles.home__banner__header }>编辑Application(只能编辑图片和标题)</div>
        <div className = { styles.home__banner__upload }>
          <UploadTable category = "home_app" editAble = { [ 'title', 'url' ] }/>
        </div>
      </div>
    </div>
  }
}

export default ConsoleHome