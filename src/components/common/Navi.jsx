import React from 'react'
import { withRouter } from 'react-router'
import PropTypes from 'prop-types'
import styles from './styles.styl'

@withRouter
class Navi extends React.Component {
  constructor(props) {
    super(props)
    this.data = [
      'aaaaaaaaaaaa',
      'bbbbbbbbbb',
      'cccccccccccc',
      'aaaaaaaaaaaa',
      'bbbbbbbbbb',
      'cccccccccccc',
      'aaaaaaaaaaaa',
      'bbbbbbbbbb',
      'cccccccccccc'
    ]
  }
  handleClick = () => {
    this.props.router.push('products')
  }

  render() {
    const { content } = this.props
    return <div
        className = { styles.navi }
        onClick = { this.handleClick }
        onMouseEnter = { this.handleEnter }
        onMouseLeave = { this.handleLeave }
           >
      <div className = { styles.navi__content }>{ content }</div>
      <div className = { styles.navi__hidden }>
            { this.data.map((v, i) => <div key = { i }>{ v }</div>) }
          </div>
    </div>
  }
}
Navi.propTypes = {
  // title: PropTypes.string.isRequired,
  router: PropTypes.object,
  content: PropTypes.string.isRequired
}

export default Navi