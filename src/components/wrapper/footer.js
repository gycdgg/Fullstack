import React,{Component} from 'react';
import logoUrl from '../../assets/img/logo.png';
import nameUrl from '../../assets/img/company-name.png';
import styles from './styles.styl';
class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer className={styles.footer}>
                <div className = {styles.footer__rights}>
                    All rights reserved
                </div>
            </footer>
        )
    }
}
export default Footer;
