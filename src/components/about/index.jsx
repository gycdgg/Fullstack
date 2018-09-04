import React from 'react'
import config from '@/config'
import styles from './styles.styl'


class About extends React.Component {

  render() {
    return <div className = { styles.container }>
      <div className = { styles.container__top }>
        <div className = { styles.container__top__left }>
          { config.about.top.map((v, i) => <div key = { i }>
            <h3>{ v.title }</h3>
            <p>
              { v.content }
            </p>
          </div>) }
        </div>
        <div className = { styles.container__top__right }>
          <img src = { `${config.proxy_oss}/map.png` }/>
        </div>
      </div>
      <div className = { styles.container__why }>
        <h2> Why Us</h2>
        <div className = { styles.container__why__content }>
          {
            config.about.whyUs.map((v, i) => <div key = { i } className = { styles.item }>
              <img src = { `https://www.kinsom.com/wp-content/uploads/${v.icon}.svg` }/>
              <div className = { styles.item__content }>
                <h3>{ v.title }</h3>
                <div>{ v.content }</div>
              </div>
            </div>)
          }
        </div>
      </div>
    </div>
  }
}

export default About