import React from 'react'
import { withRouter } from 'react-router'
import PropTypes from 'prop-types'
import styles from './styles.styl'

@withRouter
class Navi extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      style: {},
      show: false
    }
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

  handleEnter = (e) => {
    e.stopPropagation()
    this.setState({
      style: {
        backgroundColor: 'red'
      },
      show: true
    })
  }
  handleClick = () => {
    this.props.router.push('products')
  }
  handleLeave = (e) => {
    e.stopPropagation()
    this.setState({ style: {}, show: false })
  }
  render() {
    const { content } = this.props
    return <div
      onClick = {this.handleClick}
      className={styles.navi}
      onMouseEnter={this.handleEnter}
      onClick = {this.handleClick}
      onMouseLeave = {this.handleLeave}>
      <div className={styles.navi__content} style={this.state.style}>{content}</div>
      {this.state.show
        ? <div className={styles.navi__hidden}>
            {this
              .data
              .map((v, i) => {
                return <div key={i}>{v}</div>
              })}
          </div>
        : null}
    </div>
  }
}
Navi.propTypes = {
  // title: PropTypes.string.isRequired,
  router: PropTypes.object,
  content: PropTypes.string.isRequired
}

export default Navi