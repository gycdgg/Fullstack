import React from 'react'
import { app1, app2, app3, app4 } from 'imgs'
import styles from './styles.styl'
const imgArrs = [ app1, app2, app3, app4 ]
class Applications extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <div className = {styles.app}>
    <p className = {styles.app__content}>Our products are suitable for
     global telecom solutions, 
     including Metropolitan area networks, 
     Data centers, FTTx, Broadband access, 
     CATV, Wireless networks, IPTV, GPON, EPON etc.. Where there is fiber optic solutions, there have KINSOM’s products.</p>
    {imgArrs.map((v, i) => <img src = {v} key = {i}/>)}
    </div>
  }
}

export default Applications