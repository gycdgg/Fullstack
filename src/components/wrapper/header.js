/**
 * Created by kadven on 2017/1/24.
 */
import React,{Component} from 'react';
import {Link,IndexLink,withRouter} from 'react-router';
import {Menu} from 'antd';
import config from '../../../config';
import logoUrl from '../../assets/img/logo.png';
import nameUrl from '../../assets/img/company-name.png';
import styles from './styles.styl';
const Item = Menu.Item;
const redirect = config.redirect;
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectKey : [this.props.href]
        }
    }
    render() {

        return (
            <header className={styles.header}>
                <div className="iota-container">
                    <div className={styles.header__logo}>
                        <img src={logoUrl} alt="Edmond" className={styles.header__logo__logo}/>
                    </div>
                    <div className={styles.header__login}>
                        <a className={styles.regisiterBtn} href={redirect.signup}>
                            注册
                        </a>
                        <a className={styles.loginBtn} href={redirect.signin}>
                            登录
                        </a>
                    </div>
                </div>
            </header>
        )
    }
}
export default withRouter(Header);