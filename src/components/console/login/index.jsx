import { Form, Icon, Input, Button } from 'antd'
import styles from './styles'
import PropTypes from 'prop-types'
import React from 'react'
const FormItem = Form.Item
@Form.create()

class Login extends React.Component {
  static propTypes = {
    form: PropTypes.object.isRequired
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div  className={styles.login}>
        <Form onSubmit={this.handleSubmit} className = {styles.login__form}>
        <h3 className = {styles.login__form__title}>欢迎来到控制中心</h3>
          <FormItem>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
            )}
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit" className={styles.login__form__submit}>
              Log in
            </Button>
          </FormItem>
        </Form>
      </div>
    )
  }
}

export default Login