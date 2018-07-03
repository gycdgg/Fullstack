import React from 'react'
import { Upload, Icon, Modal, Button, Spin, message } from 'antd'
import PropTypes from 'prop-types'
import 'whatwg-fetch'

class UploadImg extends React.Component {

  static propTypes = {
    category: PropTypes.string.isRequired,
    len: PropTypes.number.isRequired,
    buttonWords: PropTypes.string
  }
  
  static defaultProps = {
    fileList: [],
    buttonWords: '确定',
    len: 3
  }

  state = {
    loading: false,
    previewVisible: false,
    previewImage: '',
    fileList: []
  };
  componentDidMount() {
    fetch('/api/admin/pictures',{
      method: 'GET'
    })
  }
  handleCancel = () => this.setState({ previewVisible: false })

  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    })
  }

  handleChange = ({ fileList }) => this.setState({ fileList })

  handleSubmit = async() => {
    this.setState({ loading: true })
    let { fileList } = this.state
    let normailList = fileList.map(v => {
      let obj = {}
      v.response ? (obj.url = v.response.url) : (obj.url = v.url)
      obj.type = v.type
      obj.status = v.status
      obj.uid = v.uid
      obj.name = v.name
      obj.category = this.props.category
      return obj
    })
    fetch('/api/admin/pictures', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      },
      credentials: 'include',
      body: JSON.stringify(normailList)
    }).then(res => res.json()).then(res => {
      this.setState({ loading: false })
      if(res.message === 'Success') {
        message.success('添加成功')
      } else {
        message.error('添加失败')
      }
    }).catch((err) => {
      console.error(err)
      this.setState({ loading: false })
      message.error('添加失败')
    })
  }
  render() {
    const { len, buttonWords } = this.props
    const { previewVisible, previewImage, fileList } = this.state
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    )
    return (
      <div className="clearfix">
      <Spin spinning={this.state.loading}>
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
        <Button onClick = {this.handleSubmit} type = "primaty" >{buttonWords}</Button>
      </Spin>
      </div>
    )
  }
}

export default UploadImg
