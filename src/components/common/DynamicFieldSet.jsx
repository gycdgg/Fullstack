import React from 'react'
import PropTypes from 'prop-types'
import { Form, Input, Icon, Button } from 'antd'
const FormItem = Form.Item


class DynamicFieldSet extends React.Component {

  static propTypes = {
    labelRequired: PropTypes.bool.isRequired,
    inputRequired: PropTypes.bool.isRequired,
    form: PropTypes.object.isRequired,
    formItemLayout: PropTypes.object.isRequired,
    label: PropTypes.object.isRequired
  }

  static defaultProps = {
    inputRequired: false,
    labelRequired: false,
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

  state = {
    keys: [ 0 ]
  }

  remove = (k) => {
    const { keys } = this.state 
    if (keys.length === 1) {
      return
    }

    this.setState({
      keys: keys.filter(key => key !== k),
    })
  }

  add = () => {
    const { keys } = this.state
    const nextKeys = keys.concat(keys.length)
    this.setState({
      keys: nextKeys,
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    const { formItemLayout, label, labelRequired, inputRequired } = this.props
    const formItemLayoutWithOutLabel = {
      wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 6, offset: 6 },
      },
    }
    const { keys }  = this.state
    return <div> { keys.map((k, index) => 
        <FormItem
            required = { labelRequired }
            { ...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel) }
            label = { index === 0 ? label : '' }
            key = { k }
        >
          { getFieldDecorator(`${label}[${k}]`, {
            rules: [{
              required: inputRequired
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
          <Button type = "dashed" onClick = { this.add } style = { { width: '70%' } }>
            <Icon type = "plus" /> Add { label }
          </Button>
        </FormItem>
      </div>
  }
}


export default DynamicFieldSet