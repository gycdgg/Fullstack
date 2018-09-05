import React from 'react'
import { Dropdown } from 'antd'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styles from './styles.styl'

@withRouter
@connect(({ product }) => ({ categoryArr: product.categoryArr }))
class Navi extends React.Component {

  static propTypes = {
    categoryArr: PropTypes.array.isRequired
  }
  constructor(props) {
    super(props)
  }

  
  handleClick = () => {
    this.props.router.push('products')
  }
  
  itemRender = (item) => item.map(v => <ul key = { v.id }><p>{ v.name }</p> { v.subcategorys && v.subcategorys.map(sub => <li key = { sub.id }>{ sub.name }</li>) } </ul>)

  get menu() {
    const { categoryArr } = this.props
    return <div className = { styles.content }>
      { this.itemRender(categoryArr) }
    </div>
  }
  render() {
    const { content } = this.props
    return <Dropdown placeholder = { content } overlay = { this.menu } placement = "bottomCenter">
      <div className = { styles.navi }>{ content }</div>
    </Dropdown>
  }
}
Navi.propTypes = {
  // title: PropTypes.string.isRequired,
  router: PropTypes.object,
  content: PropTypes.string.isRequired
}

export default Navi