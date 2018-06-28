import React from 'react'
import styles from './styles.styl'


class Layout extends React.Component {
  render() {
    return <div className = {styles.container}>
      <div className = {styles.container__header}>header</div>
      <div className = {styles.container__main}>
        <div className = {styles.container__main__nav}>this is nav</div>
        <div className = {styles.container__main__content}>content</div>
      </div>
      <div className = {styles.container__footer}>footer</div>
    </div>
  }
}

export default Layout