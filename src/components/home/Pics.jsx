import React from 'react'
import { Button } from 'antd'
import { product1 } from 'imgs'
import styles from './styles.styl'
/**
 * use img data from backend
 * use mock data instead
 */
const imgsArr = new Array(8).fill(product1)
class Pics extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        console.log(imgsArr)
        return <div className = {styles.pic}>
            {
                imgsArr.map((v,i)=> <div className = {styles.pic__item} key = {i} ><img src = {imgsArr[1]} /><div className = {styles.pic__item__button}>default</div></div>)
            }
            
        </div>
    }
}

export default Pics