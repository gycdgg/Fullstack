import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles'
import { TreeSelect, Form, Input, Upload, Icon, Button } from 'antd'
import { DynamicFieldSet } from '../../common'
const TreeNode = TreeSelect.TreeNode
const FormItem = Form.Item
const { TextArea } = Input

@Form.create()
class CreateProduct extends React.Component {
  
  static propTypes = {
    form: PropTypes.object.isRequired
  }

  state = {
    fileList: []
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      console.log('1111', values)
      if (!err) {
        // fetch('/api/client/quote', {
        //   method: 'POST',
        //   body: values
        // }).then(res => {
        //   if( res.message === 'Success') {
        //     message.success('submit success')
        //     this.props.form.setFieldsValue({
        //       first_name: null,
        //       last_name: null,
        //       email: null,
        //       company: null,
        //       country: null,
        //       phone: null,
        //       product_detail: null,
        //       upload: []
        //     })
        //   } else {
        //     message.error('submit failed')
        //   }
        // }).catch(err => {
        //   console.log(`submit quote error:${err}`)
        //   message.error('submit failed')
        // })
      }
    })
  }
  
  onChange = (e) => {
    console.log(e)
  }
  
  normFile = (e) => {
    console.log('Upload event:', e)
    if (Array.isArray(e)) {
      return e
    }
    return e && e.fileList
  }
  
  render() {
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
    }
    const { getFieldDecorator } = this.props.form
    return <Form  className = { styles.create } onSubmit = { this.handleSubmit }>
      <FormItem label =  "category" { ...formItemLayout }>
        {
          getFieldDecorator('category', {
            rules: [{ required: true }]
          })(
          <TreeSelect
              showSearch
              style = { { width: 300 } }
              dropdownStyle = { { maxHeight: 400, overflow: 'auto' } }
              placeholder = "Please select" 
              allowClear
              treeDefaultExpandAll
              onChange = { this.onChange }
          >
          <TreeNode value = "xWDM & OADM" title = "xWDM & OADM" key = "0-1"></TreeNode>
          <TreeNode value = "Optical Transceivers" title = "Optical Transceivers" key = "random2" disabled  >
            <TreeNode value = "SFP Transceivers" title = "SFP Transceivers" key = "random3" />
            <TreeNode value = "SFP+ Transceivers" title = "SFP+ Transceivers" key = "random4" />
            <TreeNode value = "XFP Transceivers" title = "XFP Transceivers" key = "random5" />
            <TreeNode value = "25G/40G/100G Transceivers" title = "25G/40G/100G Transceivers" key = "random6" />
          </TreeNode>
          <TreeNode value = "Active Optical Cables" title = "Active Optical Cables" key = "0-1"></TreeNode>
        </TreeSelect>)
        }
      </FormItem>
      <FormItem label =  "name" { ...formItemLayout }>
        {
          getFieldDecorator('name', {
            rules: [{
              required: true
            }]
          })(<Input/>)
        }
      </FormItem>
      <FormItem label =  "summary" { ...formItemLayout }>
        {
          getFieldDecorator('summary', {
            rules: [{ required: true }]
          })(<TextArea/>)
        }
      </FormItem>
      <FormItem
          { ...formItemLayout }
          label = "upload product picture"
      >
        { getFieldDecorator('product_pic', {
          valuePropName: 'product_pic',
          getValueFromEvent: this.normFile,
        })(
          <Upload action = "/api/admin/upload" onChange = { this.handleChange }>
            <Button>
              <Icon type = "upload" /> Click to upload
            </Button>
          </Upload>
        ) }
      </FormItem>
      <FormItem
          { ...formItemLayout }
          label = "upload product pdf/doc"
      >
        { getFieldDecorator('product_pic', {
          valuePropName: 'product_pic',
          getValueFromEvent: this.normFile,
        })(
          <Upload action = "/api/admin/upload" onChange = { this.handleChange }>
            <Button>
              <Icon type = "upload" /> Click to upload
            </Button>
          </Upload>
        ) }
      </FormItem>
      <DynamicFieldSet { ...this.props } formItemLayout = { formItemLayout } label = "features" />
      <DynamicFieldSet { ...this.props } formItemLayout = { formItemLayout } label = "applications" />
      <DynamicFieldSet { ...this.props } formItemLayout = { formItemLayout } label = "packages" />
      <FormItem
          { ...formItemLayout }
          label = "upload workshop show"
      >
        { getFieldDecorator('workshop_pdf', {
          valuePropName: 'workshop_pdf',
          getValueFromEvent: this.normFile,
        })(
          <Upload action = "/api/admin/upload" onChange = { this.handleChange }>
            <Button>
              <Icon type = "upload" /> Click to upload
            </Button>
          </Upload>
        ) }
      </FormItem>
      <FormItem
          label = "submit"
          { ...formItemLayout }
      >
        <Button type = "primary" htmlType = "submit">
          Submit
        </Button>
      </FormItem>
    </Form>
  }
}

export default CreateProduct