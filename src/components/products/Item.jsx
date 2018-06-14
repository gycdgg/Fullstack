import React from 'react'
import styles from './styles'
import { Card } from 'antd'
import { product1 } from 'imgs'
class Item extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    const { title, content } = this.props
    return  <Card title={title} hoverable extra={<a href="#">More</a>} className = { styles.item }>
    <img className = {styles.item__img} src = {product1}/>
    <div className = {styles.item__content}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </div>
  </Card>
  }
}

export default Item