import React from 'react'
import { Menu } from '../common'
import PropTypes from 'prop-types'
/**
 * mock data
 * products list
 * use array and array in array
 * array in array. the first value is sub category
 */
const title = 'Product list'
const mockNavi = [
  'product1',
  'product2',
  [ 'category1', 'product3', 'product4', 'product5' ],
  'product6',
  'product7',
  [ 'category2', 'product8', 'product9', [ 'category2-1', 'product10', 'product11' ]],
  'product12',
  'product13'
]
class ProductWrapper extends React.Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  }
  constructor(props) {
    super(props)
  }

  render() {
    return <Menu navi = { mockNavi } { ...this.props } title = { title } >
      { this.props.children }
    </Menu>
  }
}

export default ProductWrapper