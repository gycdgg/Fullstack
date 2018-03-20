import React ,{Component} from 'react';
import Header from './header';
import Sider from './sider'
import Footer from './footer';
import 'antd/dist/antd.less'
import styles from './styles.styl';
class Wrapper extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="react-root" className = {styles.body}>
                <Header href = {this.props.location.pathname}/>
                <div className = {styles.body__content}>
                    <Sider />
                    <div className = {styles.body__content__children}>
                        {this.props.children}
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Wrapper;