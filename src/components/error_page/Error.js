/**
 * Created by kadven on 2017/3/21.
 */
import React, { Component } from 'react';
import {Link} from 'react-router';
import styles from './styles.styl';
class Error extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div className={styles.bg}>
            <div className={styles.bg__head}></div>
            <div className={styles.bg__content}>
                <img src={this.props.imgUrl} alt={this.altText}/>
                <p className={styles.bg__content__errorMsg}>{this.props.errorMsg}</p>
                <Link to="/" className={styles.bg__content__link}>{this.props.btnText}</Link>
            </div>
        </div>
    }
}
export default Error