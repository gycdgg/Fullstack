import React from 'react'
import { Menu, Icon, Breadcrumb } from 'antd'
import { withRouter,Link } from 'react-router'
const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup
import styles from './styles.styl'
class MenuList extends React.Component{
  constructor(props){
    super(props)
  }
  handleClick = (e) => {
    console.log('click ', e);
  }
  itemRender = (route,params,routes,paths) => {
    const last = routes.indexOf(route) === routes.length - 1;
    return last ? <span>{route.breadcrumbName}</span> : <Link to={paths.join('/')}>{route.breadcrumbName}</Link>;
  }

  naviRender = (navi) => {
    return navi.map((v,i) => {
      if(Array.isArray(v)){
        return <SubMenu key = {v} title = {v.shift(1)}>
          {this.naviRender(v)}
        </SubMenu>
      } else {
        return <Menu.Item>{v}</Menu.Item>
      }
    }
    )
  }
  render(){
    // get props from father component
    const { routes,title,navi } = this.props
    return <div className = {styles.menu}>
      <div className = {styles.menu__header}> 
        <Icon className = {styles.icon} type="home" />
        <Breadcrumb itemRender = {this.itemRender} routes = {routes} separator = ">"/>
      </div>
      <div className = {styles.menu__container}>
        <div className = {styles.menu__container__navi}>
          <div className = { styles.menu__container__navi__title}>{title}</div>
          <Menu
            className = {styles.menu}
            onClick={this.handleClick}
            defaultSelectedKeys={['5']}
            defaultOpenKeys={['sub1']}
            mode="inline"
          >
            {this.naviRender(navi)}
          </Menu>
          {/* {this.props.navi} */}
        </div>
        <div className = {styles.menu__container__content}>
          {this.props.children}
        </div>
      </div>
    </div>
  }
}

export default MenuList