import React from 'react'
import styles from './styles.styl'
import { withRouter } from 'react-router'
import Sider from './Sider'
import { Button, message } from 'antd'
import PropTypes from 'prop-types'
import fetch from '$fetch'

@withRouter
class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    router: PropTypes.object.isRequired
  }

  handleClick = () => {
    fetch('/api/admin/session', {
      method: 'DELETE'
    }).then(() => {
      this.props.router.push('login')
    }).catch(err => {
      console.log(err)
      message.error('登出失败')
    })
  }
  
  render() {
    return <div className = { styles.container }>
      <div className = { styles.container__header }>
        <span>欢迎进入控制台</span>
        <span className = { styles.container__header__button }>
          <Button onClick = { this.handleClick } type = "primary">退出</Button>
        </span>
      </div>
      <div className = { styles.container__main }>
        <div className = { styles.container__main__nav }><Sider/></div>
        <div className = { styles.container__main__content }>
          <div className = { styles.container__main__content__header }></div>
          { this.props.children }
        </div>
      </div>
      <div className = { styles.container__footer }>All rights Reserved by Edmond Guan</div>
    </div>
  }
}

export default Layout