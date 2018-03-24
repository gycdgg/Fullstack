import React from 'react'

class LazyLoadImage extends React.Component {
  constructor(props) {
    console.log(1111112)
    super(props)
  }

  render(){
    console.log('111111')
    return <div>
      this is LazyLoadImage
    </div>
  }
}

export default LazyLoadImage