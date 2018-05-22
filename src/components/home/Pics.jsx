import React from 'react'
import { product1 } from 'imgs'
import styles from './styles.styl'
const imgsArr = new Array(4).fill(product1)
class Pics extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        console.log(imgsArr)
        return <div className = {styles.pic}>
            <img src = {imgsArr[1]} />
        </div>
    }
}

export default Pics