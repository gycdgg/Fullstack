import React from 'react'
import styles from './styles'
import { Divider, Pagination, Input } from 'antd'
import Item from './Item'
import fetch from '$fetch'
/**
 * use mock data for product item
 */
const products = new Array(10).fill('this is test product')
class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      productList: []
    }
  }
  componentDidMount() {
    fetch('/api/client/products').then(res => {
      this.setState({
        productList: res.rows
      })
    })
  }

  getProductList = () => {
    // const offset = 
    fetch('/api/client/products').then()
  }
  render() {
    return <div className = { styles.list }>
      <div className = { styles.list__header }>list header</div>
      <Divider className = { styles.divider }/>
      <div className = { styles.list__search }>
        <Input onChange = { (e) => this.handleInputChange(e) }/>
      </div>
      <Divider dashed className = { styles.divider }/>
      <div className = { styles.list__content }>
        { this.state.productList.map((v, i) => <Item title = { v.name } content = { v.summary } key = { i }/>) }
      </div>
      <Pagination showQuickJumper defaultCurrent = { 2 } total = { 500 } onChange = { this.onChange }
          className = { styles.list__page }
      />
    </div>
  }
}

export default List 