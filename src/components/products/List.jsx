import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import styles from './styles'
import { Divider, Pagination, Input } from 'antd'
import Item from './Item'
import { getProduct, changePage, setQuery } from '../../actions/product'

@connect(({ product }) => ({ product }), (dispatch) => ({
  changePage: (...args) => { 
    dispatch(changePage(...args))
    dispatch(getProduct())
  },
  changeCategory: (...args) => { 
    dispatch(actions.changeCategory(...args))
    dispatch(getProduct())
  },
  getProduct: () => dispatch(getProduct()),
  setQuery: (...args) => { 
    dispatch(setQuery(...args))
    dispatch(getProduct())
  }
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
    const { location, setQuery } = this.props
    setQuery(location.query)
  }

  onPageSizeChange = (e) => {
    const { category } = this.props.product
    document.body.scrollTop = document.documentElement.scrollTop = 0
    let url = `/products?page=${e}${category ? `&category=${category}` : ''}`
    this.props.router.push(url)
    this.props.changePage(e)
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