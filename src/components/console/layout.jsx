import React from 'react'
import styles from './styles.styl'
import Sider from './Sider'
import { Button } from 'antd'
import PropTypes from 'prop-types'
class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  }
  render() {
    return <div className = {styles.container}>
      <div className = {styles.container__header}>
        <span>欢迎进入控制台</span>
        <span>
          <Button type = "primary">退出</Button>
        </span>
      </div>
      <div className = {styles.container__main}>
        <div className = {styles.container__main__nav}><Sider/></div>
        <div className = {styles.container__main__content}>
          { this.props.children }
        </div>
      </div>
      <div className = {styles.container__footer}>All rights Reserved by Edmond Guan</div>
    </div>
  }
}

export default Layout