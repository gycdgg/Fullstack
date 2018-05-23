import React from 'react'
import styles from './styles.styl'
class Menu extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return <div className = {styles.container}>
      <div className = {styles.container__navi}>
        {this.props.navi}
      </div>
      <div className = {styles.container__content}>
        {this.props.children}
      </div>
    </div>
  }
}

export default Menu