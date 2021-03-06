import React from 'react'
import fetch from '$fetch'
import { Table, Divider, message } from 'antd'
import moment from 'moment'

class ConsoleProductList extends React.Component {

  state = {
    productList: [],
    limit: 10,
    offset: 0,
    total: 0
  }

  componentDidMount() {
    fetch('/api/admin/products').then(res => {
      res.rows  =  res.rows.map(v => {
        v.key = v.id
        return v
      })
      this.setState({ productList: res.rows, total: res.count })
    })
  }

  handleDelete = (id) => {
    fetch(`/api/admin/products/${id}`, {
      method: 'DELETE'
    }).then(() => {
      this.setState({
        productList: this.state.productList.filter(v => v.id !== id)
      })
      message.success('delete success')
    })
  }

  handlePageSizeChange = (e) => {
    this.setState({
      offset: (e - 1) * 10
    })
  }
  render() {
    const { limit, offset, productList, total } = this.state
    const columns = [
      { title: 'Product Name', dataIndex: 'name' }, 
      { title: 'Category', dataIndex: 'category' }, 
      { title: 'Summary', dataIndex: 'summary' }, 
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
            <a onClick = { () => this.handleDisplay(record.id) }>Detail</a>
            <Divider type = "vertical" />
            <a onClick = { () => this.handleEdit(record.id) }>Edit</a>
            <Divider type = "vertical" />
            <a onClick = { () => this.handleDelete(record.id) }>Delete</a>
          </span>
        )
      }
    ]
    return <div>
      <Table columns = { columns } dataSource = { productList.slice(offset, limit + offset) } pagination = { {
        current: this.state.offset / 10 + 1, 
        pageSize: 10,
        total: total,
        onChange: this.handlePageSizeChange,
      } }
      />
    </div>
  }
}

export default ConsoleProductList