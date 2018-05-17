import React from 'react'
import { Card } from 'antd'
import LazyImg from '../../components/common/LazyImg'
import styles from './styles.styl'
const { Meta } = Card
class LazyLoadImage extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount(){
    console.log(this.wripper.offsetTop,this.wripper.offsetHeight,window.scrollY)
  }
  render() {
    const imgInfo = [
        {alt:'1111',src : 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',title : '111111',description:'111111111'},
        {alt:'1111',src : 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',title : '111111',description:'111111111'},
        {alt:'1111',src : 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',title : '111111',description:'111111111'},
        {alt:'1111',src : 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',title : '111111',description:'111111111'},
        {alt:'1111',src : 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',title : '111111',description:'111111111'},
        {alt:'1111',src : 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',title : '111111',description:'111111111'},
        {alt:'1111',src : 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',title : '111111',description:'111111111'},
        {alt:'1111',src : 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',title : '111111',description:'111111111'},
        {alt:'1111',src : 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',title : '111111',description:'111111111'},
        {alt:'1111',src : 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',title : '111111',description:'111111111'},
        {alt:'1111',src : 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',title : '111111',description:'111111111'},
        {alt:'1111',src : 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',title : '111111',description:'111111111'},
        {alt:'1111',src : 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',title : '111111',description:'111111111'},
        {alt:'1111',src : 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',title : '111111',description:'111111111'}
    ]
    return <div className = { styles.container } ref = {(value) => this.wripper = value} >
    { imgInfo.map((v,i)=> <Card
            key = {i}
            hoverable
            className = { styles.container__card }
            style = {{ width: 240,margin: 20 }}
            cover = {<LazyImg alt={v.alt} src={v.src}/>}
          >
            <Meta
              title = {v.title}
              description = {v.description}
            />
          </Card>
    )
    }</div>
  }
}

export default LazyLoadImage