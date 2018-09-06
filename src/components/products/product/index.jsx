import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles'
import Desc from './Desc'
import Detail from './Detail'
import fetch from '$fetch'
import { connect } from 'react-redux'
import { setQuery } from '../../../actions/product'
@connect(( product ) => ( product ), (dispatch) => ({
  setQuery: (...args) => { 
    dispatch(setQuery(...args))
  }
}))
class Product extends React.Component {
  static propTypes = {
    params: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    setQuery: PropTypes.func.isRequired
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
    const { location, setQuery } = this.props
    setQuery(location.query)
    const { id } = this.props.params 
    fetch(`/api/admin/products/${id}`)
    .then(res => {
      this.setState({ productDetail: res })
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