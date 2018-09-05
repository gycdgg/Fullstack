import React from 'react'
import { Menu } from '../common'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
/**
 * mock data
 * products list
 * use array and array in array
 * array in array. the first value is sub category
 */
const title = 'Product list'
@connect( product  => ({ categoryArr: product.categoryArr }))
class ProductWrapper extends React.Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    categoryArr: PropTypes.array.isRequired
  }
  constructor(props) {
    super(props)
  }

  render() {
    return <Menu navi = { this.props.categoryArr } { ...this.props } title = { title } >
      { this.props.children }
    </Menu>
  }
}

export default ProductWrapper