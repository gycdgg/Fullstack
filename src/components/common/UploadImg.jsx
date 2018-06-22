import React from 'react'
import { Upload, Icon, Modal, Button } from 'antd'
import PropTypes from 'prop-types'
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
    fileList: [],
  };

  handleCancel = () => this.setState({ previewVisible: false })

  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    })
  }

  handleChange = ({ fileList }) => this.setState({ fileList })

  handleSubmit = () => {
    console.log(this.state.fileList)
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
          action = "/api/admin/imgs"
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
