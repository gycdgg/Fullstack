## Full Stack demo by React and Nodejs

> **FrontEnd: React + Redux + Antd + stylus + webpack**

> **BackEnd: Node + mysql + redis + sequelize + jwt**

### 项目介绍
企业站前后端，后台系统的路由为/console

### 项目运行
DEV 环境
1. npm i
2. npm run dll
3. npm run dev
4. npm run build

### cookbook
代码风格，没有对错，只是个人习惯
#### 组件声明
全面使用es6的class规则.从上到下的顺序依次是
* class
  * propTypes
  * defaultPropTypes
  * constructor
  * lifecycle events
  * event handlers
  * getters
  * render
lifecycle events全部写在一起。有propTypes一律写在最顶部。event handles写在lifecycle后面

```javascript
class Person extends React.Component {
  static propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired
  }
  constructor (props) {
    super(props)

    this.state = { smiling: false }

  }

  componentWillMount () {}

  componentDidMount () {}

  // ...

  handleClick = () => {
    this.setState({smiling: !this.state.smiling})
  }

  get fullName () {
    return this.props.firstName + this.props.lastName
  }

  render () {
    return (
      <div onClick={this.handleClick}>
        {this.fullName} {this.state.smiling ? 'is smiling.' : ''}
      </div>
    )
  }
}
```

#### 计算属性
使用getter封装，render里面的props和state的条件组合
对boolean属性，个人习惯用isXXX
```js
get isBoy(){
  return this.state.gender === 'boy' && this.props.age <= 18
}

render(){
  return <div>
    {this.isBoy ? <Boy/>:<Girl/>}
  </div>
}
```

#### 事件回调命名

Handler 命名风格:

- 使用 `handle` 开头
- 以事件类型作为结尾 (如 `Click`, `Change`)
- 使用一般现在时

#### 容器组件
一个容器组件主要负责维护状态和数据的计算，本身并没有界面逻辑，只把结果通过 props 传递下去。

区分容器组件的目的就是可以把组件的状态和渲染解耦开来，改写界面时可不用关注数据的实现，顺便得到了可复用性。

```javascript
// bad
class MessageList extends Component {
  constructor (props) {
    super(props)
  	this.state = {
        onlyUnread: false,
        messages: []
  	}
  }

  componentDidMount () {
    $.ajax({
      url: "/api/messages",
    }).then(({messages}) => this.setState({messages}))
  }

  handleClick = () => this.setState({onlyUnread: !this.state.onlyUnread})

  render () {
    return (
      <div class="message">
        <ul>
          {
            this.state.messages
              .filter(msg => this.state.onlyUnread ? !msg.asRead : true)
              .map(({content, author}) => {
                return <li>{content}—{author}</li>
              })
          }
        </ul>
        <button onClick={this.handleClick}>toggle unread</button>
      </div>
    )
  }
}
```

```javascript
// good
class MessageContainer extends Component {
  constructor (props) {
    super(props)
  	this.state = {
        onlyUnread: false,
        messages: []
  	}
  }

  componentDidMount () {
    $.ajax({
      url: "/api/messages",
    }).then(({messages}) => this.setState({messages}))
  }

  handleClick = () => this.setState({onlyUnread: !this.state.onlyUnread})

  render () {
    return <MessageList
      messages={this.state.messages.filter(msg => this.state.onlyUnread ? !msg.asRead : true)}
      toggleUnread={this.handleClick}
    />
  }
}

function MessageList ({messages, toggleUnread}) {
  return (
    <div class="message">
      <ul>
        {
          messages
            .map(({content, author}) => {
              return <li>{content}—{author}</li>
            })
        }
      </ul>
      <button onClick={toggleUnread}>toggle unread</button>
    </div>
  )
}
MessageList.propTypes = {
  messages: propTypes.array.isRequired,
  toggleUnread: propTypes.func.isRequired
}
```

#### 纯函数的render

render 函数应该是一个纯函数（stateless component 当然也是），不依赖 this.state、this.props 以外的变量，也不改变外部状态

```javascript
// bad
render () {
  return <div>{window.navigator.userAgent}</div>
}

// good
render () {
  return <div>{this.props.userAgent}</div>
}
```
**Feel free to contact me: Edmond.Guan@foxmail.com**