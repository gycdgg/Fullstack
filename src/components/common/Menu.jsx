import React from 'react'
import PropTypes from 'prop-types'
import { Menu } from 'antd'
import styles from './styles.styl'
import { connect } from 'react-redux'
import { getProduct, changePage, setQuery } from '../../actions/product'
const SubMenu = Menu.SubMenu
const subArr = [ 'SFP Transceivers', 'SFP+ Transceivers', 'XFP Transceivers', '25G/40G/100G Transceivers',  ]
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

class MenuList extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
    navi: PropTypes.array.isRequired,
    routes: PropTypes.array.isRequired
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
    let account = 1
    if(subArr.includes(e.slice(-1)[0])) {
      account = 2
    }
    this.setState({
      openKeys: e.slice(-account)
    })
    console.log('open', e.slice(-account), e)
  }
  
  /**
   * @argument: navi is a array
   * map navi and render it logically
   */
  naviRender = (navi) => {
    return navi.map((v, i) => {
      if(Array.isArray(v)) {
        return <SubMenu key = { v[0] } title = { v[0] }>
          { this.naviRender(v.slice(1)) }
        </SubMenu>
      } else {
        return <Menu.Item className = { styles.item } key = { v + i }>{ v }</Menu.Item>
      }
    }
    )
  }

  render() {
    // get props from father component
    console.log('11111111111111', this.state.openKeys)
    const { title, navi } = this.props
    return <div className = { styles.menu }>
      <div className = { styles.menu__container }>
        <div className = { styles.menu__container__navi }>
          <div className = { styles.menu__container__navi__title }>{ title }</div>
          <Menu
              className = { styles.menu }
              defaultOpenKeys = { [ 'sub1' ] }
              defaultSelectedKeys = { [ '5' ] }
              openKeys = { this.state.openKeys }
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