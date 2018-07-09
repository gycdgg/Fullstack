import React, { Component } from 'react'
import Error from './Error'
import { serverError } from '../../assets/img'

class ServerError extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <Error
        altText = "500 server error"
        btnText = "返回首页"
        errorMsg = "很抱歉，前方高能我们缺少能量..."
        imgUrl = { serverError }
           />
  }
}


export default ServerError