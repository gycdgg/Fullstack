import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles'
import { TreeSelect, Form, Input, Button, message } from 'antd'
import { DynamicFieldSet, Uploads } from '../../common'
import fetch from '$fetch'
import { connect } from 'react-redux'
const TreeNode = TreeSelect.TreeNode
const FormItem = Form.Item
const { TextArea } = Input


@Form.create()
@connect(({ product }) => ({ categoryArr: product.categoryArr }))
class CreateProduct extends React.Component {
  
  static propTypes = {
    form: PropTypes.object.isRequired,
    categoryArr: PropTypes.array.isRequired
  }

  state = {
    fileList: []
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      values.category_id = +values.category.split('-')[0]
      values.subcategory_id = +values.category.split('-')[1]
      values.category = values.category.split('-')[2]
      values.product_pic = values.product_pic || []
      values.product_pdf = values.product_pdf || []
      values.workshop_pic = values.workshop_pic || []
      console.log('1111', values)
      if (!err) {
        fetch('/api/admin/products', {
          method: 'POST',
          body: values
        }).then(() => {
          message.success('submit success')
            // this.props.form.setFieldsValue({
            //   first_name: null,
            //   last_name: null,
            //   email: null,
            //   company: null,
            //   country: null,
            //   phone: null,
            //   product_detail: null,
            //   upload: []
            // })
        }).catch(err => {
          console.log(`submit quote error:${err}`)
          message.error('submit failed')
        })
      }
    })
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
    const { categoryArr } = this.props
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
            { categoryArr.map((v, i) => <TreeNode value = { '' + v.id } title = { v.name } key = { i } disabled>
             { v.subcategorys.map((_v, _i) => <TreeNode value = { `${v.id}-${_v.id}-${_v.name}` } title = { _v.name } key = { `${i}-${_i}` }></TreeNode>) }
            </TreeNode>) }
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
      <Uploads formItemLayout = { formItemLayout } label = "upload product picture" value = "product_pic" { ...this.props }/>
      <Uploads formItemLayout = { formItemLayout } label = "upload product doc/pdf" value = "product_pdf" { ...this.props }/>
      <DynamicFieldSet { ...this.props } formItemLayout = { formItemLayout } label = { 'features' } />
      <DynamicFieldSet { ...this.props } formItemLayout = { formItemLayout } label = { 'applications' } />
      <DynamicFieldSet { ...this.props } formItemLayout = { formItemLayout } label = { 'packages' } />
      <Uploads formItemLayout = { formItemLayout } label = "upload workshop picture" value = "workshop_pic" { ...this.props }/>      
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