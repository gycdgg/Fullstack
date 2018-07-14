import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.styl'
import { Form, Input, Button, Col, Row, Icon, Upload, message } from 'antd'
const FormItem = Form.Item
import fetch from '$fetch'
@Form.create()
class Quote extends React.Component {
  static propTypes = {
    form: PropTypes.object.isRequired,
  }
  constructor(props) {
    super(props)
  }

  state = {
    fileList: []
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        fetch('/api/client/quotes', {
          method: 'POST',
          body: values
        }).then(() => {
          message.success('submit success')
          this.props.form.setFieldsValue({
            first_name: null,
            last_name: null,
            email: null,
            company: null,
            country: null,
            phone: null,
            product_detail: null,
            upload: []
          })
        }
        ).catch(err => {
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

  handleChange = (info) => {
    let fileList = info.fileList
    fileList = fileList.slice(-2)
    fileList = fileList.map((file) => {
      if (file.response) {
        file.url = file.response.url
      }
      return file
    })
    fileList = fileList.filter((file) => {
      if (file.response) {
        return file.response.status === 'success'
      }
      return true
    })

    this.setState({ fileList })
  }
  render() {
    const { getFieldDecorator } = this.props.form
    return <div className = { styles.quota }>
      <header className = { styles.quota__header }>Get a Quick Quote</header>
      <p className = { styles.quota__text }>You can contact Ingellen Live Chat at the top-right corner to get real-time answers to your questions, or email Ingellen Technical Support where most issues are resolved within 24 hours.</p>
      <div className = { styles.quota__forms }>
        <Form onSubmit = { this.handleSubmit }>
          <Row  gutter = { 12 }>
            <Col span = { 6 }>
              <FormItem
                  colon = { false }
                  label = "First Name"
              >
              { getFieldDecorator('first_name', {
                rules: [{ required: true, message: 'Please input your first name!' }],
              })(
                <Input />
              ) }
              </FormItem>
            </Col>
            <Col span = { 6 }>
              <FormItem
                  colon = { false }
                  label = "Last Name"
              >
              { getFieldDecorator('last_name', {
                rules: [{ required: true, message: 'Please select your last name!' }],
              })(
                <Input/>
              ) }
            </FormItem>
            </Col>
          </Row>
          <Row  gutter = { 12 }>
          <Col span = { 6 }>
            <FormItem
                colon = { false }
                label = "Email"
            >
            { getFieldDecorator('email', {
              rules: [{ required: true, message: 'Please input your email!' }],
            })(
              <Input />
            ) }
            </FormItem>
          </Col>
          <Col span = { 6 }>
            <FormItem
                colon = { false }
                label = "Company"
            >
            { getFieldDecorator('company')(
              <Input />
            ) }
          </FormItem>
          </Col>
        </Row>
        <Row  gutter = { 12 }>
        <Col span = { 6 }>
          <FormItem
              colon = { false }
              label = "Country"
          >
          { getFieldDecorator('country', {
            rules: [{ required: true, message: 'Please input your country!' }],
          })(
            <Input />
          ) }
          </FormItem>
        </Col>
        <Col span = { 6 }>
          <FormItem
              colon = { false }
              label = "Phone Number"
          >
          { getFieldDecorator('phone')(
            <Input />
          ) }
        </FormItem>
        </Col>
      </Row>
      <Row gutter = { 12 }>
        <Col span = { 12 }>
          <FormItem
              colon = { false }
              label = "share the product details with us"
          >
            { getFieldDecorator('product_detail', {
              rules: [{ required: true, message: 'Tell us your purpose' }],
            })(
              <Input.TextArea placeholder = "Tell us your purpose for the same application or share your describtions, quantities to the items that you need to apply for a sample if no product ID online"/>
            ) }
          </FormItem>
        </Col>
      </Row>
      <FormItem
          label = "Upload"
      >
        { getFieldDecorator('upload', {
          valuePropName: 'fileList',
          getValueFromEvent: this.normFile,
        })(
          <Upload action = "/api/client/upload" onChange = { this.handleChange } fileList = { this.state.fileList }>
            <Button>
              <Icon type = "upload" /> Click to upload
            </Button>
          </Upload>
        ) }
      </FormItem>
      <FormItem>
        <Button type = "primary" htmlType = "submit">
          Submit
        </Button>
      </FormItem>
      </Form>
      </div>
    </div>
  }
}

export default Quote
