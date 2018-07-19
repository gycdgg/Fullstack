import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styles from './styles'
import { Divider, Pagination, Input } from 'antd'
import Item from './Item'
import { getProduct, changePage, setQuery } from '../../actions/product'
import { withRouter } from 'react-router'

@connect(({ product }) => ({ product }), (dispatch, ownprops) => ({
  changePage: (...args) => dispatch(changePage(...args)),
  changeCategory: (...args) => dispatch(actions.changeCategory(...args)),
  getProduct: (...args) => dispatch(getProduct(...args)),
  setQuery: (...args) => dispatch(setQuery(...args))
}))

@withRouter
class List extends React.Component {

  static propTypes = {
    location: PropTypes.object.isRequired,
    getProduct: PropTypes.func.isRequired,
    changePage: PropTypes.func.isRequired,
    product: PropTypes.object.isRequired,
    router: PropTypes.object.isRequired,
    setQuery: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { location, getProduct, setQuery } = this.props
    setQuery(location.query)
    getProduct()
  }

  onPageSizeChange = (e) => {
    const { category } = this.props.product
    let url = `/products?page=${e}${category ? `&category=${category}` : ''}`
    this.props.router.push(url)
    this.props.changePage(e)
    this.props.getProduct()
  }

  render() {
    console.log('this.props', this.props)
    const { page: current,  amount: total, productList } = this.props.product
    return <div className = { styles.list }>
      <div className = { styles.list__header }>list header</div>
      <Divider className = { styles.divider }/>
      <div className = { styles.list__search }>
        <Input onChange = { (e) => this.handleInputChange(e) } placeholder = "input product name which you want to search"/>
      </div>
      <Divider dashed className = { styles.divider }/>
      <div className = { styles.list__content }>
        { productList.map((v, i) => <Item title = { v.name } content = { v.summary } key = { i }/>) }
      </div>
      <Pagination 
          showQuickJumper 
          defaultCurrent = { 1 } 
          current = { +current }
          pageSize = { 10 }
          total = { total }
          onChange = { this.onPageSizeChange }
          className = { styles.list__page }
      />
    </div>
  }
}

export default List 