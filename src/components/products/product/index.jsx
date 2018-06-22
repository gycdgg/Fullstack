import React from 'react'
import styles from './styles'
import Desc from './Desc'
import Detail from './Detail'

class Product extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return<div className = {styles.product}>
      <Desc/>
      <hr/>
      <Detail/>
    </div>
  }
}

export default Product