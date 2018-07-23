import React from 'react'
import PropTypes from 'prop-types'
import { Menu } from 'antd'
import styles from './styles.styl'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { getProduct, changePage, setQuery, changeCategory } from '../../actions/product'
const SubMenu = Menu.SubMenu
const subArr = [ 'SFP Transceivers', 'SFP+ Transceivers', 'XFP Transceivers', '25G/40G/100G Transceivers',  ]
@connect(({ product }) => ({ product }), (dispatch) => ({
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
    // let account = 1
    // if(subArr.includes(e.slice(-1)[0])) {
    //   account = 2
    // }
    // this.setState({
    //   openKeys: e.slice(-account)
    // })
    const category = e.slice(-1)[0]
    let url = `/products?page=${1}${category ? '&category=' + category : ''}`
    this.props.router.push(url)
    this.props.changeCategory(e.slice(-1)[0])
  }
  
  /**
   * @argument: navi is a array
   * map navi and render it logically
   */
  naviRender = (navi) => {
    return navi.map((v) => {
      if(Array.isArray(v)) {
        return <SubMenu key = { v[0] } title = { v[0] }>
          { this.naviRender(v.slice(1)) }
        </SubMenu>
      } else {
        return <Menu.Item className = { styles.item } key = { v }>{ v }</Menu.Item>
      }
    }
    )
  }

  render() {
    const { title, navi, product } = this.props
    let openKeys = subArr.includes(product.category) ? [ 'Optical Transceivers', product.category ] : [ product.category ]
    console.log(openKeys, '222222222222222222222222', )
    return <div className = { styles.menu }>
      <div className = { styles.menu__container }>
        <div className = { styles.menu__container__navi }>
          <div className = { styles.menu__container__navi__title }>{ title }</div>
          <Menu
              className = { styles.menu }
              defaultOpenKeys = { [ 'sub1' ] }
              defaultSelectedKeys = { [ '5' ] }
              openKeys = { openKeys }
              mode = "inline"
              onClick = { this.handleClick }
              onOpenChange = { this.handleOpenChange }
          >
            { this.naviRender(navi) }
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