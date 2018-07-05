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
    buttonWords: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    editAble: PropTypes.object
  }
  
  static defaultProps = {
    editAble: [],
    buttonWords: '确定'
  }

  state = {
    list: [],
    targetItem: {},
    visible: false
  }

  componentDidMount() {
    this.getPictures()
  }

  getPictures = () => {
    fetch(`/api/admin/pictures?category=${this.props.category}`).then(res => {
      this.setState({ list: res.data.rows })
    })
  }

  normFile = (e) => {
    if (Array.isArray(e)) {
      return e
    }
    return e && e.fileList
  }

  handleOk = (e) => {
    e.preventDefault()
    this.props.form.validateFields( async(err, values) => {
      if(Object.prototype.toString.call(values.fileList) === '[object Array]') {
        values.url = values.fileList[0]['url']
        values.uid = values.fileList[0]['uid']
      }
      if (!err) {
        fetch('/api/admin/pictures', {
          method: 'PUT',
          body: values
        }).then(res => {
          if(res.message === 'Success') {
            message.success('编辑成功')
            this.getPictures()
            this.setState({ visible: false })
          } else {
            message.error('编辑失败')
          }
        })
      }
    })
  }
  /**
   *
   * open modal and edit item
   * @memberof UploadTable
   */
  handleEditClick = (item) => () => {
    let target = {}
    for(let i in item) {
      if([ ...this.props.editAble, 'id', 'uid' ].includes(i)) {
        target[i] = item[i]
      }
    }
    this.setState({ targetItem: target, visible: true })
  }

  handleCancel = ()  => {
    this.setState( { visible: false })
  }
  render() {
    const { visible, targetItem } = this.state
    const { editAble } = this.props
    const { getFieldDecorator, getFieldValue } = this.props.form
    const defaultColumns = [{
      title: '标题',
      dataIndex: 'title',
      key: 'title',
    }, {
      title: '描述',
      dataIndex: 'desc',
      key: 'desc',
    }, {
      title: '文件名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '图片',
      dataIndex: 'url',
      key: 'url',
      render: (value) => <img src={value} style = {{ width: '50px' }}/>
    },
    { title: '操作',
      key: 'id',
      render: (id) => (
      <span>
        <a onClick = { this.handleEditClick(id) } className="ant-dropdown-link">
          编辑<Icon type="edit" />
        </a>
      </span>
    ) }
    ]
    console.log('list', this.state.list, targetItem)
    const columns = defaultColumns.filter(v => editAble.includes(v.dataIndex) || v.key === 'id')
    return (
      <div  className = {styles.uploadTable}>
        <Table columns={columns} dataSource={this.state.list} pagination = {false}/>
        <Modal visible={visible} onCancel={this.handleCancel} title = "编辑" onOk = {this.handleOk} >
          <Form>
          <FormItem>
            {getFieldDecorator('id', {
              rules: [{ required: false }],
              initialValue: targetItem.id
            })(
              <span />
            )}
            </FormItem>
            {editAble.includes('title') ? <FormItem label = "标题">
            {getFieldDecorator('title', {
              rules: [{ required: false }],
              initialValue: targetItem.title
            })(
              <Input />
            )}
            </FormItem> : null }
            {editAble.includes('desc') ?  <FormItem label = "描述">
            {getFieldDecorator('desc', {
              rules: [{ required: false }],
              initialValue: targetItem.desc
            })(
              <Input />
            )}
            </FormItem> : null}
            {editAble.includes('name') ? <FormItem label = "名称">
            {getFieldDecorator('name', {
              rules: [{ required: false }],
              initialValue: targetItem.name
            })(
              <Input />
            )}
            </FormItem> : null}
            {editAble.includes('url') ? <FormItem>{getFieldDecorator('fileList', {
              valuePropName: 'fileList',
              initialValue: [{ url: targetItem.url, uid: targetItem.uid }],
              getValueFromEvent: this.normFile,
            })(
            <Upload  action="/api/admin/upload" listType="picture-card">
              {getFieldValue('fileList') === undefined || getFieldValue('fileList').length === 1 ? null : <Button>
                <Icon type="upload" /> Click to upload
              </Button>}
            </Upload>
            )}</FormItem> : null }
          </Form>
        </Modal>
      </div>
    )
  }
}


export default UploadTable
