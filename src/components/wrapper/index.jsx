import React ,{Component} from 'react'
import Header from './Header'
import Footer from './Footer'
import 'antd/dist/antd.less'
import styles from './styles.styl'
class Wrapper extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="react-root" className = {styles.body}>
                <Header/>
                <div className = {styles.body__content}>
                    {this.props.children}
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Wrapper;