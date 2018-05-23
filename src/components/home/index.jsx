import React, { Component } from 'react'
import styles from './styles.styl'
import Application from './Application'
import Banner from './Banner'
import Pics from './Pics'
class IndexComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className = {styles.home}>
        <div className = {styles.home__banner}>
          <Banner />
        </div>
        <div className = {styles.home__pics}>
          <p className = {styles.home__pics__products}>PRODUCT CENTER</p>
          <div className = {styles.line}></div>
          <Pics/>
        </div>
          <div className = {styles.home__apps}>
          <p className = {styles.home__apps__app}>APPLICATIONS</p>
          <div className = {styles.line}></div>
          <Application/>
        </div>
      </div>
    )
  }
}
export default IndexComponent;