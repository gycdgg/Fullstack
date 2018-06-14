import React from 'react'
import styles from './styles'
import Desc from './Desc'
class Product extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return<div className = {styles.product}>
      <Desc/>
      <hr/>
    </div>
  }
}

export default Product