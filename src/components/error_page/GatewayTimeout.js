import React, { Component } from 'react'
import Error from './Error'
import { gatewayError } from '../../assets/img'

class GatewayTimeout extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <Error
        altText = "gateway timeout"
        btnText = "返回首页"
        errorMsg = "很抱歉，前方服务器禁止通行..."
        imgUrl = { gatewayError }
           />
  }
}
export default GatewayTimeout