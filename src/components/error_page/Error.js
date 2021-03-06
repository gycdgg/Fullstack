import React, { Component } from 'react'
import { Link } from 'react-router'
import styles from './styles.styl'
import PropTypes from 'prop-types'
class Error extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return <div className = { styles.bg }>
      <div className = { styles.bg__content }>
        <img alt = { this.altText } src = { this.props.imgUrl } />
        <p className = { styles.bg__content__errorMsg }>{ this.props.errorMsg }</p>
        <Link className = { styles.bg__content__link } to = "/">{ this.props.btnText }</Link>
      </div>
    </div>
  }
}

Error.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  errorMsg: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired
}
export default Error