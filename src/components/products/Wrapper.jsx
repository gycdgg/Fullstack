import React from 'react'
import styles from './styles.styl'
import {Menu} from '../common'
class ProductWrapper extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    console.log('props', this.props)
    return <Menu navi = "112312123" routes = {this.props.routes} params = {this.props.params}>
      {this.props.children}
    </Menu>
  }
}

export default ProductWrapper