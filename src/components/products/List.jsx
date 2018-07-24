import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import styles from './styles'
import { Divider, Pagination, Input, TreeSelect } from 'antd'
import Item from './Item'
import { getProduct, changePage, setQuery } from '../../actions/product'
const TreeNode = TreeSelect.TreeNode

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
    const { page: current,  amount: total, productList } = this.props.product
    return <div className = { styles.list }>
      <div className = { styles.list__header }>
        <Input onChange = { (e) => this.handleInputChange(e) } placeholder = "input product name which you want to search"/>
      </div>
      <Divider className = { styles.divider }/>
      <div className = { styles.list__search }>
      <TreeSelect
          showSearch
          style = { { width: 300 } }
          dropdownStyle = { { maxHeight: 400, overflow: 'auto' } }
          placeholder = "Please select" 
          allowClear
          treeDefaultExpandAll
          onChange = { this.onChange }
      >
          <TreeNode value = "xWDM & OADM" title = "xWDM & OADM" key = "0-1"></TreeNode>
          <TreeNode value = "Optical Transceivers" title = "Optical Transceivers" key = "random2" disabled  >
            <TreeNode value = "SFP Transceivers" title = "SFP Transceivers" key = "random3" />
            <TreeNode value = "SFP+ Transceivers" title = "SFP+ Transceivers" key = "random4" />
            <TreeNode value = "XFP Transceivers" title = "XFP Transceivers" key = "random5" />
            <TreeNode value = "25G/40G/100G Transceivers" title = "25G/40G/100G Transceivers" key = "random6" />
          </TreeNode>
          <TreeNode value = "Active Optical Cables" title = "Active Optical Cables" key = "0-1"></TreeNode>
        </TreeSelect>
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