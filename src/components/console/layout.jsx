import React from 'react'
import styles from './styles.styl'
import { withRouter } from 'react-router'
import Sider from './Sider'
import { Button, message } from 'antd'
import PropTypes from 'prop-types'
import 'whatwg-fetch'

@withRouter
class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    router: PropTypes.array.isRequired
  }

  handleClick = async() => {
    try{
      let data = await fetch('/api/admin/session', {
        headers: {
          'Content-Type': 'application/json; charset=UTF-8'
        },
        method: 'DELETE',
        credentials: 'include',
      }).then(res => res.json())
      if(data.message === 'Success') {
        this.props.router.push('login')
      }
    } catch(err) {
      console.log(err)
      message.error('登出失败')
    }
  }
  render() {
    return <div className = {styles.container}>
      <div className = {styles.container__header}>
        <span>欢迎进入控制台</span>
        <span>
          <Button type = "primary" onClick = {this.handleClick}>退出</Button>
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