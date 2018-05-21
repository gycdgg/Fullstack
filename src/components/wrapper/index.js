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
                <Header/>
                <div className = {styles.body__content}>
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