import React from 'react'
import PropTypes from 'prop-types'
import { Form, Input, Icon, Button } from 'antd'
const FormItem = Form.Item

let uuid = 1

class DynamicFieldSet extends React.Component {
  static propTypes = {
    form: PropTypes.object.isRequired,
    formItemLayout: PropTypes.object.isRequired
  }
  static defaultProps = {
    formItemLayout: {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 20 },
      },
    }
  }
  remove = (k) => {
    const { form } = this.props
    const keys = form.getFieldValue('keys')
    if (keys.length === 1) {
      return
    }

    form.setFieldsValue({
      keys: keys.filter(key => key !== k),
    })
  }

  add = () => {
    const { form } = this.props
    // can use data-binding to get
    const keys = form.getFieldValue('keys')
    const nextKeys = keys.concat(uuid)
    uuid++
    form.setFieldsValue({
      keys: nextKeys,
    })
  }

  render() {
    const { getFieldDecorator, getFieldValue } = this.props.form
    const { formItemLayout, label } = this.props
    const formItemLayoutWithOutLabel = {
      wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 6, offset: 6 },
      },
    }
    getFieldDecorator('keys', { initialValue: [ 0 ] })
    const keys = getFieldValue('keys')
    return <div> { keys.map((k, index) => 
        <FormItem
            { ...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel) }
            label = { index === 0 ? label : '' }
            key = { k }
        >
          { getFieldDecorator(`${label}[${k}]`, {
            rules: [{
              required: true
            }],
          })(
            <Input placeholder = "please enter" style = { { width: '80%', marginRight: 8 } } />
          ) }
          { keys.length > 1 ? (
            <Icon
                className = "dynamic-delete-button"
                type = "minus-circle-o"
                disabled = { keys.length === 1 }
                onClick = { () => this.remove(k) }
            />
          ) : null }
        </FormItem>
      ) }
      <FormItem { ...formItemLayoutWithOutLabel }>
          <Button type = "dashed" onClick = { this.add } style = { { width: '60%' } }>
            <Icon type = "plus" /> Add field
          </Button>
        </FormItem>
      </div>
  }
}


export default DynamicFieldSet