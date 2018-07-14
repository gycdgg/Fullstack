import React from 'react'
import fetch from '$fetch'
import { Table, Divider, Icon } from 'antd'
import moment from 'moment'
const columns = [
  { title: 'Product Name', dataIndex: 'name' }, 
  { title: 'Category', dataIndex: 'category' }, 
  { title: 'Summary', dataIndex: 'summary' }, 
  { title: 'PDF file', dataIndex: 'product_pic',
    render: (v) => Array.isArray(v) && v.filter(_v => _v.type.includes('pdf') || _v.type.includes('doc')).map((item, i) => <a key = { i } href = { item.url }> { item.name }</a>)
  },
  {
    title: 'Create time',
    dataIndex: 'createdAt',
    defaultSortOrder: 'descend',
    render: (value) => moment(value).format('YYYY-MM-DD HH:mm:ss'),
    sorter: (a, b) => moment(a.createdAt) - moment(b.createdAt)
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <span>
        <a onClick = { () => this.handleDelete(record.id) }>Delete</a>
        <Divider type = "vertical" />
        <a href = "javascript:;" className = "ant-dropdown-link">
          More actions <Icon type = "down" />
        </a>
      </span>
    )
  }
]

class ConsoleProductList extends React.Component {
  state = {
    productList: []
  }

  componentDidMount() {
    fetch('/api/admin/products').then(res => {
      this.setState({ productList: res.rows })
    })
  }

  handleDelete = (id) => {
    fetch(`/api/admin/products/${id}`, {
      method: 'DELETE'
    })
  }
  render() {
    return <div>
      <Table columns = { columns } dataSource = { this.state.productList }/>
    </div>
  }
}

export default ConsoleProductList