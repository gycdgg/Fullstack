import React from 'react'
import { Menu, Icon } from 'antd'
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
  render(){
    return <div className = {styles.menu}>
      <div className = {styles.menu__header}>header</div>
      <div className = {styles.menu__container}>
        <div className = {styles.menu__container__navi}>
        <Menu
          onClick={this.handleClick}
          style={{ width: 256 }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
        >
          <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
          </SubMenu>
        </Menu>
          // {this.props.navi}
        </div>
        <div className = {styles.menu__container__content}>
          {this.props.children}
        </div>
      </div>
    </div>
  }
}

export default MenuList