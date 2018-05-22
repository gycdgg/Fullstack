import React, { Component } from 'react'
import styles from './styles.styl'
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
          <Pics/>
        </div>
      </div>
    )
  }
}
export default IndexComponent;