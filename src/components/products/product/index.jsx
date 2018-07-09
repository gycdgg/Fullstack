import React from 'react'
import styles from './styles'
import Desc from './Desc'
import Detail from './Detail'
import fetch from '$fetch'
class Product extends React.Component {
  constructor(props) {
    super(props)
  }
  state = {
    desc: {},
    Detail: {}
  }

  componentDidMount() {
    fetch('/api/admin/products/1')
    .then(res => {
      console.log(res)
    })
    fetch('/api/admin/products')
    .then(res => {
      console.log(res)
    })
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