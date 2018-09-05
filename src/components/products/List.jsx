import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import styles from './styles'
import { Divider, Pagination, Input, TreeSelect } from 'antd'
import Item from './Item'
import { getProduct, changePage, setQuery, changeCategory } from '../../actions/product'
const TreeNode = TreeSelect.TreeNode

@connect(( product ) => ( product ), (dispatch) => ({
  changePage: (...args) => { 
    dispatch(changePage(...args))
    dispatch(getProduct())
  },
  changeCategory: (...args) => { 
    dispatch(changeCategory(...args))
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
    setQuery: PropTypes.func.isRequired,
    changeCategory: PropTypes.func.isRequired
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

  selectRender = (categoryArr) => {
    return categoryArr.map(v => {
      if(Array.isArray(v)) {
        return <TreeNode value = { v[0] } title = { v[0] } key = { v[0] }>{ this.selectRender(v.slice(1)) }</TreeNode>
      }else{
        return <TreeNode value = { v } title = { v } key = { v }></TreeNode>
      }
    })
  }
  

  render() {
    const { page: current,  amount: total, productList } = this.props.product
    return <div className = { styles.list }>
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