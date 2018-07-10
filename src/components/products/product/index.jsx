import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles'
import Desc from './Desc'
import Detail from './Detail'
import fetch from '$fetch'
class Product extends React.Component {
  static propTypes = {
    params: PropTypes.object.isRequired
  }
  constructor(props) {
    super(props)
  }

  state = {
    productDetail: {
      applications: [],
      features: [],
      packages: []
    }
  }

  componentDidMount() {
    const { id } = this.props.params 
    fetch(`/api/admin/products/${id}`)
    .then(res => {
      this.setState({ productDetail: res.data })
      console.log(res)
    })
    fetch('/api/admin/products')
    .then(res => {
      console.log(res)
    })
  }
  render() {
    const { productDetail } = this.state
    return<div className = { styles.product }>
      <Desc product = { productDetail }/>
      <hr/>
      <Detail product = { productDetail }/>
    </div>
  }
}

export default Product