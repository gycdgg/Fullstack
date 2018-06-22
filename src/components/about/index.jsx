import React from 'react'
import { UploadImg } from '../common'

class About extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    fetch('/api/admin/session')
  }

  render() {
    return <div>
      <UploadImg len = {3} site = "home"/>
    </div>
  }
}

export default About