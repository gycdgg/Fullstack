import React,{Component} from 'react'
import logoUrl from '../../assets/img/logo.png'
import nameUrl from '../../assets/img/company-name.png'
import styles from './styles.styl'


const config = {
    type:["Products","Support","AboutGigalight"],
    Products:["xWDM & OADM","MTP/MPO Fiber Cables","Optical Transceivers","Active Optical Cables","Fiber Patch Cables","Passive Components"],
    Solutions:["FTTX Solution","FTTX Solution"],
    Support:["Service","RMA","Download Center","Knowledge Center"],
    AboutGigalight:["Core Competitiveness","Cloud Ecosystem","Qualification & Certificates","Gigalight Culture","Job Opportunities"]
}
class Footer extends Component {
    constructor(props) {
      super(props)
    }

    render() {
        return (
            <footer className={styles.footer}>
                <div className = {styles.footer__content}>
                    <div className = {styles.footer__content__banner}>
                        {
                            config.type.map((v,i)=>{
                              return <span key = {i}>
                                <div className = {styles.footer__content__banner__title}>{v}</div>
                                <ul className = {styles.footer__content__banner__item}>
                                  {config[v].map((_v,_i)=>{
                                     return <li key = {_i}>{_v}</li>
                                  })}
                                </ul>
                          </span>
                            })
                        }
                    </div>
                    All rights reserved @ Edmond Guan
                </div>
            </footer>
        )
    }
}
export default Footer;
