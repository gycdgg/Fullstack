import React from 'react'
import fetch from '$fetch'
class ConsoleProductList extends React.Component {
  componentDidMount() {
    fetch('/api/admin/products').then(res => {
      console.log(res)
    })
  }
  render() {
    return <div>test11111111111111</div>
  }
}

export default ConsoleProductList