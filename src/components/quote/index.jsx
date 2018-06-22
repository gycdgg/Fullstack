import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.styl'
import { Form, Select, Input, Button, Col, Row, Icon, Upload } from 'antd'
const FormItem = Form.Item
const Option = Select.Option
@Form.create()
class Quote extends React.Component {
  static propTypes = {
    form: PropTypes.object.isRequired,
  }
  constructor(props) {
    super(props)
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
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
    const { getFieldDecorator } = this.props.form
    return <div className = {styles.quota}>
      <header className = {styles.quota__header}>Get a Quick Quote</header>
      <p className = {styles.quota__text}>You can contact Ingellen Live Chat at the top-right corner to get real-time answers to your questions, or email Ingellen Technical Support where most issues are resolved within 24 hours.</p>
      <div className = {styles.quota__forms}>
        <Form onSubmit={this.handleSubmit}>
          <Row  gutter={12}>
            <Col span={6}>
              <FormItem
              colon = {false}
              label="First Name"
              >
              {getFieldDecorator('FirstName', {
                rules: [{ required: true, message: 'Please input your first name!' }],
              })(
                <Input />
              )}
              </FormItem>
            </Col>
            <Col span={6}>
              <FormItem
              colon = {false}
              label="Last Name"
              >
              {getFieldDecorator('gender', {
                rules: [{ required: true, message: 'Please select your last name!' }],
              })(
                <Select
                  placeholder="Select a option and change input text above"
                  onChange={this.handleSelectChange}
                >
                  <Option value="male">male</Option>
                  <Option value="female">female</Option>
                </Select>
              )}
            </FormItem>
            </Col>
          </Row>
          <Row  gutter={12}>
          <Col span={6}>
            <FormItem
            colon = {false}
            label="Email"
            >
            {getFieldDecorator('email', {
              rules: [{ required: true, message: 'Please input your email!' }],
            })(
              <Input />
            )}
            </FormItem>
          </Col>
          <Col span={6}>
            <FormItem
            colon = {false}
            label="Company"
            >
            {getFieldDecorator('company')(
              <Select
                placeholder="Select a option and change input text above"
                onChange={this.handleSelectChange}
              >
                <Option value="male">male</Option>
                <Option value="female">female</Option>
              </Select>
            )}
          </FormItem>
          </Col>
        </Row>
        <Row  gutter={12}>
        <Col span={6}>
          <FormItem
          colon = {false}
          label="Country"
          >
          {getFieldDecorator('country', {
            rules: [{ required: true, message: 'Please input your country!' }],
          })(
            <Input />
          )}
          </FormItem>
        </Col>
        <Col span={6}>
          <FormItem
          colon = {false}
          label="Phone Number"
          >
          {getFieldDecorator('phone')(
            <Select
              placeholder="Select a option and change input text above"
              onChange={this.handleSelectChange}
            >
              <Option value="male">male</Option>
              <Option value="female">female</Option>
            </Select>
          )}
        </FormItem>
        </Col>
      </Row>
      <Row gutter={12}>
        <Col span = {12}>
          <FormItem
            colon = {false}
            label="share the product details with us"
            >
            {getFieldDecorator('detail', {
              rules: [{ required: true, message: 'Please select your phone number!' }],
            })(
              <Input.TextArea placeholder = "Tell us your purpose for the same application or share your describtions, quantities to the items that you need to apply for a sample if no product ID online"/>
            )}
          </FormItem>
        </Col>
      </Row>
      <FormItem
      label="Upload">
        {getFieldDecorator('upload', {
          valuePropName: 'fileList',
          getValueFromEvent: this.normFile,
        })(
          <Upload name="logo" action="/upload.do">
            <Button>
              <Icon type="upload" /> Click to upload
            </Button>
          </Upload>
        )}
      </FormItem>
      <FormItem>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </FormItem>
      </Form>
      </div>
    </div>
  }
}

export default Quote
