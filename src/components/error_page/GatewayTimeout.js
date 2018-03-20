import React, { Component } from 'react';
import {Link} from 'react-router';
import Error from './Error';
import {gatewayError} from '../../assets/img';

class GatewayTimeout extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <Error
            imgUrl={gatewayError}
            altText="gateway timeout"
            errorMsg="很抱歉，前方服务器禁止通行..."
            btnText="返回首页"
        />
    }
}
export default GatewayTimeout