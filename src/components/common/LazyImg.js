import React from 'react'
import PropTypes from 'prop-types'

class LazyImg extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount(){
    console.log('111111', this.img)
    document.addEventListener('scroll', function(){
      console.log(this.img.offsetTop,this.img.offsetHeight, window.scrollY)
    }.bind(this))
  }
  render(){
    return <img src = {this.props.src}  alt = {this.props.alt} ref = {(value)=> this.img = value}/>
  }
}

LazyImg.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}

export default LazyImg

