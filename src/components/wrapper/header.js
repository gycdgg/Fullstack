import React, { Component } from 'react'
import { Button, Modal, Select, Input } from 'antd'
import logoUrl from '../../assets/img/logo1.png'
import styles from './styles.styl'
import { Navi } from "../common"

const Search = Input.Search
class Header extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <header className = {styles.header}>
        <div className = {styles.header__logo}>
          <img src = {logoUrl}/>
        </div>
        <div className = {styles.header__menu}>
          <Navi content = "PRODUCTS"/>
          <Navi content = "MARKETS"/>
          <Navi content = "SUPPORT"/>
          <Navi content = "ABOUT US"/>
          <Navi content = "CONTACT US"/>
        </div>
        <div className = {styles.header__right}>
        <Select defaultValue="English" size = "small" style = {{display: "block", width: 120, marginBottom: 10}}>
        <Option value="zh_CN">zh_CN</Option>
            <Option value="English">English</Option>
          </Select>
          <Search
          placeholder="search ..."
          size = "small"
          onSearch={value => console.log(value)}
          style = {{display: "block", width: 120}}
          />
        </div>
      </header>
    )
  }
}
export default Header