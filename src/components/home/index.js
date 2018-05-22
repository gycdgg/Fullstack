/**
 * Created by kadven on 2017/1/23.
 */
import React, {
  Component
} from 'react';
import styles from './styles.styl';
import Banner from './banner'
class IndexComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className = {styles.home}>
        <div className = {styles.home__banner}>
          <Banner />
        </div>
      </div>
    )
  }
}
export default IndexComponent;