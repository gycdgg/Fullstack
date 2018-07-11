import React from 'react'
import { Table } from 'antd'
import fetch from '$fetch'
import moment from 'moment'

const columns = [{
  title: 'First Name',
  dataIndex: 'first_name',
}, {
  title: 'Last Name',
  dataIndex: 'last_name'
}, {
  title: 'Email',
  dataIndex: 'email'
}, {
  title: 'Company',
  dataIndex: 'company'
}, {
  title: 'Country',
  dataIndex: 'country'
}, {
  title: 'Phone Number',
  dataIndex: 'phone',
}, {
  title: 'Product details',
  dataIndex: 'product_detail'
}, {
  title: 'Submit time',
  dataIndex: 'createdAt',
  defaultSortOrder: 'descend',
  render: (value) => moment(value).format('YYYY-MM-DD HH:mm:ss'),
  sorter: (a, b) => moment(a.createdAt) - moment(b.createdAt)
}, {
  file: 'Files',
  dataIndex: 'files',
  render: (value) => value.map((v, i) => <div key = { i }><a  href = { v.url }>{ v.name }</a></div>)
}]


class ConsoleQuote extends React.Component {
  state = {
    quoteList: []
  }
  componentDidMount() {
    fetch('/api/admin/quote').then(res => {
      if(res.message === 'Success') {
        this.setState({
          quoteList: res.data.rows
        })
      }
    })
  }
  render() {
    return <div>
    <Table columns = { columns } dataSource = { this.state.quoteList }/>,
    </div>
  }
}

export default ConsoleQuote