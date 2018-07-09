import React, { Component } from 'react'
import Error from './Error'
import { notfound } from '../../assets/img'
class NotFound extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <Error
        altText = "not found"
        btnText = "返回首页"
        errorMsg = "很抱歉，您访问的页面不在地球上..."
        imgUrl = { notfound }
           />
  }
}
export default NotFound