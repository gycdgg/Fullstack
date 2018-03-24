import React, { Component } from 'react'
import { Button, Modal } from 'antd'
import logoUrl from '../../assets/img/logo.png'
import styles from './styles.styl'
import LoginContent from './login'
class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isVisible: false
    }
  }
  showModal = (type) => {
    this.setState({
      isVisible: true,
      title: type === 'login' ? '登陆' : '注册'
    })
  }
  handleCancel = () => {
    this.setState({
      isVisible: false
    })
  }
  handleOk = (e) => {
    e.preventDefault()
    this._ref.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
        this.setState({ isVisible: false })
      }
    })
  }
  render() {
    let { isVisible, title } = this.state
    return (
      <header className={styles.header}>
        <div className={styles.header__logo}>
          <img src={logoUrl} alt="Edmond" className={styles.header__logo__logo} />
          <span className={styles.header__logo__text}>主要靠脸吃饭，偶尔写几行代码</span>
        </div>
        <div className={styles.header__login}>
          <Button type='primary' style={{ marginRight: 10 }} onClick={() => this.showModal('sign')}>
            注册
                        </Button>
          <Button type='primary' onClick={() => this.showModal('login')}>
            登录
                        </Button>
          <Modal title={title}
            visible={isVisible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}>
            <LoginContent ref={(value) => this._ref = value} />
          </Modal>
        </div>
      </header>
    )
  }
}
export default Header