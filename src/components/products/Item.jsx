import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles'
import { Card } from 'antd'
import { product1 } from 'imgs'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
@withRouter
@connect(product => (product))
class Item extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    product: PropTypes.object.isRequired,
    id: PropTypes.number.isRequired,
    router: PropTypes.object.isRequired
  }
  constructor(props) {
    super(props)
  }

  handleItemClick = () => {
    const { id } = this.props
    this.props.router.push(`products/${id}${window.location.search}`)
  }

  render() {
    const { title, content } = this.props
    return  <Card className = { styles.item } extra = { <a href = "#">More</a> } hoverable title = { title }
        onClick = { this.handleItemClick }
            >
    <img className = { styles.item__img } src = { product1 }/>
    <div className = { styles.item__content }>
      <p>Card content{ content }</p>
      <p>Card content</p>
      <p>Card content</p>
    </div>
  </Card>
  }
}

export default Item