import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styles from './styles'
import { Divider, Pagination, Input } from 'antd'
import Item from './Item'
import fetch from '$fetch'

@connect(({ product }) => ({ product }), (dispatch, ownprops) => ({
  changePage: (...args) => dispatch(actions.changePage(...args)),
  changeCategory: (...args) => dispatch(actions.changeCategory(...args))
}))

class List extends React.Component {

  static propTypes = {
    location: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props)
    this.limit = 10
    console.log('this.props.location', this.props.location)
    this.state = {
      amount: 0,
      category: this.props.location.query.category,
      productList: [],
      page: +this.props.location.query.page || 1
    }
  }

  componentDidMount() {
    this.getProductList()
  }

  onPageSizeChange = (e) => {
    console.log(e)
  }
  /**
   * transfer limit offset and category to backend
   */
  getProductList = () => {
    let { page, category } = this.state
    let offset = (page - 1) * (this.limit)
    fetch(`/api/client/products?limit=${this.limit}&offset=${offset}&category=${category}`).then((res) =>
      this.setState({
        amount: res.count,
        productList: res.rows
      })
    )
  }

  render() {
    console.log('this.props', this.props)
    const { page: current,  amount: total } = this.state
    return <div className = { styles.list }>
      <div className = { styles.list__header }>list header</div>
      <Divider className = { styles.divider }/>
      <div className = { styles.list__search }>
        <Input onChange = { (e) => this.handleInputChange(e) } placeholder = "input product name which you want to search"/>
      </div>
      <Divider dashed className = { styles.divider }/>
      <div className = { styles.list__content }>
        { this.state.productList.map((v, i) => <Item title = { v.name } content = { v.summary } key = { i }/>) }
      </div>
      <Pagination 
          showQuickJumper 
          defaultCurrent = { 1 } 
          current = { current }
          pageSize = { 10 }
          total = { total }
          onChange = { this.onPageSizeChange }
          className = { styles.list__page }
      />
    </div>
  }
}

export default List 