import React from 'react'
import { Upload, Icon, Modal, Button } from 'antd'
import PropTypes from 'prop-types'
import 'whatwg-fetch'
class UploadImg extends React.Component {

  static propTypes = {
    site: PropTypes.string.isRequired,
    fileList: PropTypes.array.isRequired,
    len: PropTypes.number.isRequired
  }
  
  static defaultProps = {
    fileList: [],
    len: 3
  }

  state = {
    previewVisible: false,
    previewImage: '',
    fileList: this.props.fileList,
  };

  handleCancel = () => this.setState({ previewVisible: false })

  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    })
  }

  handleChange = ({ fileList }) => this.setState({ fileList })

  handleSubmit = async() => {
    console.log(this.state.fileList)
    // await fetch('/api/admin/imgs', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json; charset=UTF-8'
    //   },
    //   credentials: 'include',
    //   body: JSON.stringify(values)
    // })
  }
  render() {
    const { len } = this.props
    const { previewVisible, previewImage, fileList } = this.state
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    )
    return (
      <div className="clearfix">
        <Upload
          withCredentials = { true }
          action = "/api/admin/upload"
          listType = "picture-card"
          fileList = {fileList}
          onPreview = {this.handlePreview}
          onChange = {this.handleChange}
        >
          {fileList.length >= len ? null : uploadButton}
        </Upload>
        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
        <Button onClick = {this.handleSubmit}/>
      </div>
    )
  }
}

export default UploadImg
