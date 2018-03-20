import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';
import Error from './Error';
import {serverError} from '../../assets/img';

class ServerError extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <Error
                imgUrl={serverError}
                altText="500 server error"
                errorMsg="很抱歉，前方高能我们缺少能量..."
                btnText="返回首页"/>
    }
}


export default ServerError