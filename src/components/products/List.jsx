import React from 'react'
import styles from './styles'
import { Divider,Pagination } from 'antd'
import Item from './Item'
/**
 * use mock data for product item
 */
const products = new Array(10).fill('this is test product')
class List extends React.Component{
  constructor(props){
    super(props)
  }
  onChange = (pageNumber) => {
    console.log('Page: ', pageNumber)
  }
  render(){
    return <div className = {styles.list}>
      <div className = {styles.list__header}>list header</div>
      <Divider className = {styles.divider}/>
      <div className = {styles.list__search}>this is search select</div>
      <Divider dashed className = {styles.divider}/>
      <div className = {styles.list__content}>
        {products.map((v,i)=> <Item title = {v} key = {i}/>)}
      </div>
      <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={this.onChange} className = {styles.list__page}/>
    </div>
  }
}

export default List 