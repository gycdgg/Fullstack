import React from 'react'
import styles from './styles'
import { Button, Icon } from 'antd'
import PropTypes from 'prop-types'
import { product1 } from 'imgs'
class Desc extends React.Component {
  static propTypes = {
    product: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props)
  }
  render() {
    const { product } = this.props
    return <div className = { styles.desc }>
      <h3 className = { styles.desc__title }>{ product.name }</h3>
      <div className  = { styles.desc__content }>
        <div className = { styles.desc__content__pic }>
          <img  className = { styles.img } src = { product1 }/>
        </div>
        <div className = { styles.desc__content__text }>
          <div className = { styles.desc__content__text__words }>
          { product.summary }
          </div>
          <div className = { styles.desc__content__text__pdf }>
            <Icon className = { styles.pdfIcon } type = "paper-clip"/><span className = { styles.pdfSpan }>testPDF</span>
            <Button className = { styles.pdfSpan } ghost icon = "download" size = "small"
                type = "primary"
            > Download </Button>
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