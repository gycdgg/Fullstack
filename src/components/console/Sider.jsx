import { Menu, Icon } from 'antd'
const SubMenu = Menu.SubMenu
import { Link } from 'react-router'
import React from 'react'

class Sider extends React.Component {
  handleClick = (e) => {
    console.log('click ', e)
  }
  render() {
    return (
      <Menu
          defaultOpenKeys = { [ 'sub1' ] }
          defaultSelectedKeys = { [ '1' ] }
          mode = "inline"
          onClick = { this.handleClick }
          style = { { width: 256, height: '100%', padding: '10px 0' } }
      >
        <SubMenu key = "sub1" title = { <span><Icon type = "mail" /><span>主页</span></span> }>
            <Menu.Item key = "1"><Link to = "/console/home">主页</Link></Menu.Item>
        </SubMenu>
        <SubMenu key = "sub2" title = { <span><Icon type = "appstore" /><span>Navigation Two</span></span> }>
          <Menu.Item key = "5">Option 5</Menu.Item>
          <Menu.Item key = "6">Option 6</Menu.Item>
          <SubMenu key = "sub3" title = "Submenu">
            <Menu.Item key = "7">Option 7</Menu.Item>
            <Menu.Item key = "8">Option 8</Menu.Item>
          </SubMenu>                                                                                                                
        </SubMenu>
        <SubMenu key = "sub3" title = { <span><Icon type = "setting" /><span>Quote</span></span> }>
          <Menu.Item><Link to = "/console/quote">quote</Link></Menu.Item>
        </SubMenu>
        <SubMenu key = "sub5" title = { <span><Icon type = "setting" /><span>Product</span></span> }>
        <Menu.Item><Link to = "/console/products">product list </Link></Menu.Item>
        <Menu.Item><Link to = "/console/products/create">create product</Link></Menu.Item>
        <Menu.Item><Link to = "/console/products/edit/:id">edit product</Link></Menu.Item>
        </SubMenu>
        <SubMenu key = "sub4" title = { <span><Icon type = "setting" /><span>Navigation Three</span></span> }>
          <Menu.Item key = "9">Option 9</Menu.Item>
          <Menu.Item key = "10">Option 10</Menu.Item>
          <Menu.Item key = "11">Option 11</Menu.Item>
          <Menu.Item key = "12">Option 12</Menu.Item>
        </SubMenu>
      </Menu>
    )
  }
}

export default Sider