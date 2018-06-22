import React from 'react'
import PropTypes from 'prop-types'
import { Menu } from 'antd'
import styles from './styles.styl'
const SubMenu = Menu.SubMenu

class MenuList extends React.Component {
  static propTypes = {
    props: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
    navi: PropTypes.array.isRequired,
    routes: PropTypes.object.isRequired
  }
  constructor(props) {
    super(props)
  }

  handleClick = (e) => {
    console.log('click ', e)
  }

  /**
   * @argument: navi is a array
   * map navi and render it logically
   */
  naviRender = (navi) => {
    return navi.map((v, i) => {
      if(Array.isArray(v)) {
        return <SubMenu key = {v + i} title = {v[0]}>
          {this.naviRender(v.slice(1))}
        </SubMenu>
      } else {
        return <Menu.Item key = {v + i} className = {styles.item}>{v}</Menu.Item>
      }
    }
    )
  }

  render() {
    // get props from father component
    const { title, navi } = this.props
    return <div className = {styles.menu}>
      <div className = {styles.menu__container}>
        <div className = {styles.menu__container__navi}>
          <div className = { styles.menu__container__navi__title}>{title}</div>
          <Menu
            className = {styles.menu}
            onClick={this.handleClick}
            defaultSelectedKeys={[ '5' ]}
            defaultOpenKeys={[ 'sub1' ]}
            mode="inline">
            { this.naviRender(navi) }
          </Menu>
          <div className = { styles.menu__container__navi__title}></div>
        </div>
        <div className = {styles.menu__container__content}>
          { this.props.children }
        </div>
      </div>
    </div>
  }
}

export default MenuList