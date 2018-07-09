import React from 'react'
import styles from './styles'
import { Button, Icon } from 'antd'
import { product1 } from 'imgs'
class Desc extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return <div className = { styles.desc }>
      <h3 className = { styles.desc__title }>product title</h3>
      <div className  = { styles.desc__content }>
        <div className = { styles.desc__content__pic }>
          <img  className = { styles.img } src = { product1 }/>
        </div>
        <div className = { styles.desc__content__text }>
          <div className = { styles.desc__content__text__words }>
          The Gigalight 2x100GBASE-SR4 100m QSFP-DD optical transceiver, 200G QSFP-DD SR8 (GQD-MPO201-DSR4C) is designed for use in 2x100-Gigabit Ethernet links up to 100m over Multi-Mode Fiber (MMF). It is compliant with the QSFP-DD MSA, IEEE 802.3ba 100GBASE-SR4, and IEEE 802.3bm CAUI-4. Digital diagnostics functions are available via an I2C interface, as specified by the QSFP-DD MSA.
          </div>
          <div className = { styles.desc__content__text__pdf }>
            <Icon className = { styles.pdfIcon } type = "paper-clip"/><span className = { styles.pdfSpan }>testPDF</span> <Button className = { styles.pdfSpan } ghost icon = "download" size = "small"
                type = "primary" > Download </Button>
          </div>
          <hr/>
          <Button ghost type = "primary">Request For a Quote</Button>
          <div className = { styles.desc__content__text__ads }></div>
        </div>
      </div>
    </div>
  }
}

export default Desc