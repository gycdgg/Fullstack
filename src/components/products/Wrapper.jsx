import React from 'react'
import styles from './styles.styl'
import {Menu} from '../common'
class ProductWrapper extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return <Menu navi = "112312123">
      {this.props.children}
    </Menu>
  }
}

export default ProductWrapper