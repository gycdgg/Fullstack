import React from 'react'
import styles from './styles'
import { product1 } from 'imgs'
import { Table } from 'antd'
const imgArr = new Array(3).fill(product1)
const dataSource = [{
  key: '1',
  name: '胡彦斌',
  age: 32,
  address: '西湖区湖底公园1号'
}, {
  key: '2',
  name: '胡彦祖',
  age: 42,
  address: '西湖区湖底公园1号'
}]

const columns = [{
  title: '姓名',
  dataIndex: 'name',
  key: 'name',
}, {
  title: '年龄',
  dataIndex: 'age',
  key: 'age',
}, {
  title: '住址',
  dataIndex: 'address',
  key: 'address',
}]
// these are mock data
const features = [ 'Hot-pluggable QSFP-DD form factor', 'channels full-duplex transceiver module', 'Hot-pluggable QSFP-DD form factor', 'channels full-duplex transceiver module', 'Hot-pluggable QSFP-DD form factor', 'channels full-duplex transceiver module', 'Hot-pluggable QSFP-DD form factor', 'channels full-duplex transceiver module' ]
class Detail extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <div className = { styles.detail }>
      <div className = { styles.detail__features }>
        <div className = { styles.title }>Features</div>
        <ul className = { styles.list }>
          { features.map((v, i) => <li key = { i }>{ v }</li>) }
        </ul>
      </div>
      <hr/>
      <div className = { styles.detail__applications }>
        <div className = { styles.title }>applications</div>
        <ul className = { styles.list }>
          { features.map((v, i) => <li key = { i }>{ v }</li>) }
        </ul>
      </div>
      <hr/>
      <div className = { styles.detail__package }>
        <div className = { styles.title }>package</div>
        <ul className = { styles.list }>
          { features.map((v, i) => <li key = { i }>{ v }</li>) }
        </ul>
      </div>
      <hr/>
      <div className = { styles.detail__workshop }>
        <div className = { styles.title }>The Production workshop show</div>
        {
          imgArr.map((v, i) => <img key = { i } src = { v }/>)
        }
      </div>
      <hr/>
      <div className = { styles.detail__order }>
        <div className = { styles.title }>Ordering Infomation</div>
        <Table bordered columns = { columns } dataSource = { dataSource } pagination = { false }/>
      </div>      
    </div>
  }
}

export default Detail