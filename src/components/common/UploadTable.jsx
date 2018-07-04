import React from 'react'
import { Upload, Icon, Modal, Button, Spin, message, Table, Form, Input } from 'antd'
import PropTypes from 'prop-types'
import fetch from '$fetch'
import styles from './styles'

const FormItem = Form.Item

@Form.create()
class UploadTable extends React.Component {

  static propTypes = {
    form: PropTypes.object.isRequired,
    buttonWords: PropTypes.string.isRequired
  }
  
  static defaultProps = {
    buttonWords: '确定'
  }

  normFile = (e) => {
    console.log('Upload event:', e)
    if (Array.isArray(e)) {
      return e
    }
    return e && e.fileList
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields( async(err, values) => {
      if (!err) {
        console.log('submit values:', values)
      }
    })
  }
  render() {
    const { buttonWords } = this.props
    const { getFieldDecorator, getFieldValue } = this.props.form
    console.log('value', getFieldValue('fileList'))
    const columns = [{
      title: '标题',
      dataIndex: 'title',
      key: 'title',
      render: text => <FormItem>
      {getFieldDecorator('title', {
        rules: [{ required: false }],
        initialValue: text
      })(
        <Input placeholder="请输入标题" />
      )}
    </FormItem>,
    }, {
      title: '描述',
      dataIndex: 'desc',
      key: 'desc',
      render: text => <FormItem>
      {getFieldDecorator('desc', {
        rules: [{ required: false }],
        initialValue: text
      })(
        <span>{text}</span>
      )}
    </FormItem>,
    }, {
      title: '文件名',
      dataIndex: 'name',
      key: 'name',
      render: text => <FormItem>
      {getFieldDecorator('name', {
        rules: [{ required: false }],
        initialValue: text
      })(
        <Input placeholder="请输入文件名" />
      )}
    </FormItem>,
    },
    {
      title: '图片',
      dataIndex: 'fileList',
      key: 'fileList',
      render: (value) => {
        const fieldValue = getFieldValue('fileList')
        console.log('dasasddasasdasdasasdasd', getFieldValue('fileList'))
        return <FormItem>{getFieldDecorator('fileList', {
          valuePropName: 'fileList',
          initialValue: value,
          getValueFromEvent: this.normFile,
        })(
        <Upload  action="/api/admin/upload" listType="picture-card">
          {(fieldValue === undefined || fieldValue.length === 1) ? null : <Button>
            <Icon type="upload" /> Click to upload
          </Button> }
        </Upload>
      )}</FormItem>
      }
    }]

    const data = [{
      key: '1',
      name: 'John Brown',
      title: '标题1',
      desc: 'New York No. 1 Lake Park',
      fileList: [{
        uid: -1,
        name: 'xxx.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      }]
    }]
    return (
      <Form className="clearfix" onSubmit={this.handleSubmit}>
        <Table columns={columns} dataSource={data} pagination = {false}/>
        <FormItem>
          <Button type="primary" htmlType="submit">
              {buttonWords}
          </Button>
        </FormItem>
      </Form>
    )
  }
}

export default UploadTable
