import React from 'react'
import { Form, Upload, Button, Icon } from 'antd'
import PropTypes from 'prop-types'

const FormItem = Form.Item
class Uploads extends React.Component {
  static propTypes = {
    form: PropTypes.object.isRequired,
    label: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element
    ]).isRequired,
    formItemLayout: PropTypes.object.isRequired,
    value: PropTypes.string.isRequired
  }

  state = {
    fileList: []
  }

  normFile = (e) => {
    console.log('Upload event:', e)
    if (Array.isArray(e)) {
      return e
    }
    return e && e.fileList
  }

  handleChange = (info) => {
    let fileList = info.fileList
    // fileList = fileList.slice(-2)
    fileList = fileList.map((file) => {
      if (file.response) {
        file.url = file.response.url
      }
      return file
    })
    fileList = fileList.filter((file) => {
      if (file.response) {
        return file.response.status === 'done' || 'success'
      }
      return true
    })

    this.setState({ fileList })
  }

  render() {
    const { getFieldDecorator  } = this.props.form
    const { label, value, formItemLayout } = this.props
    return(
    <FormItem
        { ...formItemLayout }
        label = { label }
    >
      { getFieldDecorator(`${value}`, {
        valuePropName: `${value}`,
        getValueFromEvent: this.normFile,
      })(
        <Upload action = "/api/admin/upload" onChange = { this.handleChange } fileList = { this.state.fileList } >
          <Button>
            <Icon type = "upload" /> Click to upload
          </Button>
        </Upload>
      ) }
      </FormItem>)
  }
}

export default Uploads