import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styles from './styles'
import { Divider, Pagination, Input } from 'antd'
import Item from './Item'
import fetch from '$fetch'
import { getProduct, changePage } from '../../actions/product'

@connect(({ product }) => ({ product }), (dispatch, ownprops) => ({
  changePage: (...args) => dispatch(changePage(...args)),
  changeCategory: (...args) => dispatch(actions.changeCategory(...args)),
  getProduct: (...args) => dispatch(getProduct(...args)),
}))

class List extends React.Component {

  static propTypes = {
    location: PropTypes.object.isRequired,
    getProduct: PropTypes.func.isRequired,
    changePage: PropTypes.func.isRequired,
    product: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getProduct()
  }

  onPageSizeChange = (e) => {
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