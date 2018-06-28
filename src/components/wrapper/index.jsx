import React, { Component } from 'react'
import { Icon, Breadcrumb } from 'antd'
import { Link } from 'react-router'
import Header from './Header'
import Footer from './Footer'
import 'antd/dist/antd.less'
import styles from './styles.styl'
import PropTypes from 'prop-types'
class Wrapper extends Component { 
  static propTypes = {
    routes: PropTypes.array.isRequired,
    location: PropTypes.object.isRequired,
    children: PropTypes.element.isRequired,
  }
  constructor(props) {
    super(props)
  }
  itemRender = (route, params, routes, paths) => {
    const last = routes.indexOf(route) === routes.length - 1
    return last ? <span>{route.breadcrumbName}</span> : <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
  }
  get isAdmin() {
    return this.props.location.pathname.includes('console')
  }
  render() {
    const { routes, location } = this.props
    return (
      <div id="react-root">
        {this.isAdmin ? this.props.children : <div  className = {styles.body}>
          <Header/>
          <div className = {styles.body__content}>
            {location.pathname === '/' ? null : <div className = {styles.body__content__header}> 
              <Icon className = {styles.icon} type="home" />
              <Breadcrumb itemRender = {this.itemRender} routes = {routes} separator = ">"/>
            </div>}
            {this.props.children}
          </div>
          <Footer/>
        </div>}
      </div>
    )
  }
}

export default Wrapper