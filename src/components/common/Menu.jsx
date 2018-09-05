import React from 'react'
import PropTypes from 'prop-types'
import { Menu } from 'antd'
import styles from './styles.styl'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { getProduct, changePage, setQuery, changeCategory } from '../../actions/product'
const SubMenu = Menu.SubMenu
const subArr = [ 'SFP Transceivers', 'SFP+ Transceivers', 'XFP Transceivers', '25G/40G/100G Transceivers' ]

@connect( product => product, (dispatch) => ({
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
class MenuList extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
    navi: PropTypes.array.isRequired,
    routes: PropTypes.array.isRequired,
    product: PropTypes.object.isRequired,
    changeCategory: PropTypes.func.isRequired,
    router: PropTypes.object.isRequired
  }
  constructor(props) {
    super(props)
  }

  state = {
    openKeys: []
  }

  handleClick = (e) => {
    console.log('click ', e)
  }

  handleOpenChange = (e) => {
    console.log(e)
    const category = e.slice(-1)[0]
    let url = `/products?page=${1}${category ? '&category=' + category : ''}`
    this.props.router.push(url)
    this.props.changeCategory(e[1])
  }
  
  /**
   * @argument: navi is a array
   * map navi and render it logically
   */
  naviRender = (navi) => navi.map((v, i) => <SubMenu key = { i } title = { v.name }>
    { v.subcategorys.map((_v, _i) => <Menu.Item className = { styles.item } key = { _i }>{ _v.name }</Menu.Item>) }
  </SubMenu>)

  render() {
    const { title, product } = this.props
    let openKeys = [ product.category ]
    return <div className = { styles.menu }>
      <div className = { styles.menu__container }>
        <div className = { styles.menu__container__navi }>
          <div className = { styles.menu__container__navi__title }>{ title }</div>
          <Menu
              className = { styles.menu }
              defaultOpenKeys = { [ 'sub1' ] }
              openKeys = { openKeys }
              mode = "inline"
              onClick = { this.handleClick }
              onOpenChange = { this.handleOpenChange }
          >
            { this.naviRender(product.categoryArr) }
          </Menu>
          <div className = { styles.menu__container__navi__title }></div>
        </div>
        <div className = { styles.menu__container__content }>
          { this.props.children }
        </div>
      </div>
    </div>
  }
}

export default MenuList