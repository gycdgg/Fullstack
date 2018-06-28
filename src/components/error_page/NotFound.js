import React, { Component } from 'react'
import { Link } from 'react-router'
import Error from './Error'
import { notfound } from '../../assets/img'
class NotFound extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <Error
            imgUrl={notfound}
            altText="not found"
            errorMsg="很抱歉，您访问的页面不在地球上..."
            btnText="返回首页"
        />
  }
}
export default NotFound