import React from 'react'
import styles from './styles'
import { Button } from 'antd'
class Desc extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return <div className = {styles.desc}>
      <div className = {styles.desc__title}>product title</div>
      <div className  = {styles.desc__content}>
        <div className = {styles.desc__content__pic}></div>
        <div className = {styles.desc__content__text}>
          <div className = {styles.desc__content__text__words}></div>
          <div className = {styles.desc__content__text__pdf}></div>
          <Button/>
          <div className = { styles.desc__content__text__ads}></div>
        </div>
      </div>
    </div>
  }
}