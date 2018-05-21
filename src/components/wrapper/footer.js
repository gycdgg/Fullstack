import React,{Component} from 'react'
import logoUrl from '../../assets/img/logo.png'
import nameUrl from '../../assets/img/company-name.png'
import styles from './styles.styl'


const config = {
    type:["products","Markets","Support","About Gigalight"],
    Products:["xWDM & OADM","MTP/MPO Fiber Cables","Optical Transceivers","Active Optical Cables","Fiber Patch Cables","Passive Components"],
    Solutions:["FTTX Solution","FTTX Solution"],
    Support:["Service","RMA","Download Center","Knowledge Center"],
    AboutGigalight:["Core Competitiveness","Cloud Ecosystem","Qualification & Certificates","Gigalight Culture","Job Opportunities"]
}
class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer className={styles.footer}>
                <div className = {styles.footer__content}>
                    <div className = {styles.footer__content__banner}>
                        <span>
                            <div className = {styles.footer__content__banner__title}>Products</div>
                            <ul className = {styles.footer__content__banner__item}>
                                <li>xWDM & OADM</li>
                                <li>MTP/MPO Fiber Cables</li>
                                <li>Optical Transceivers</li>
                                <li>Active Optical Cables</li>
                                <li>Direct Attach Cables</li>
                                <li>Fiber Patch Cables</li>
                                <li>Passive Components</li>
                                <li>Optical Amplifiers </li>
                            </ul>
                        </span>
                        <span>Markets</span>
                        <span>Support</span>
                        <span>About Gigalight</span>
                    </div>
                    All rights reserved @ Edmond Guan
                </div>
            </footer>
        )
    }
}
export default Footer;
