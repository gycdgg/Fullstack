import React ,{Component} from 'react'
import { Menu, Icon, Breadcrumb } from 'antd'
import { Link } from 'react-router'
import Header from './Header'
import Footer from './Footer'
import 'antd/dist/antd.less'
import styles from './styles.styl'
class Wrapper extends Component {
    constructor(props) {
        super(props);
    }
    itemRender = (route,params,routes,paths) => {
        const last = routes.indexOf(route) === routes.length - 1;
        return last ? <span>{route.breadcrumbName}</span> : <Link to={paths.join('/')}>{route.breadcrumbName}</Link>;
      }
    render() {
        const { routes, location } = this.props
        return (
            <div id="react-root" className = {styles.body}>
                <Header/>
                <div className = {styles.body__content}>
                    {location.pathname === '/' ? null : <div className = {styles.body__content__header}> 
                        <Icon className = {styles.icon} type="home" />
                        <Breadcrumb itemRender = {this.itemRender} routes = {routes} separator = ">"/>
                    </div>}
                    {this.props.children}
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Wrapper;