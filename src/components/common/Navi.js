import React from "react";
import styles from "./styles.styl"
class Navi extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            show: false
        }
        this.data = ['aaaaaaaaaaaa','bbbbbbbbbb','cccccccccccc','aaaaaaaaaaaa','bbbbbbbbbb','cccccccccccc','aaaaaaaaaaaa','bbbbbbbbbb','cccccccccccc']
    }

    handleEnter = (e) => {
        e.stopPropagation()
        this.setState({
            show: true
        })
    }

    handleLeave = (e) => {
        e.stopPropagation()
        this.setState({
            show: false
        })
    }
    render(){
        const { content } =  this.props
        return <div className = {styles.navi} onMouseEnter = { this.handleEnter } onMouseLeave ={ this.handleLeave }>
            { this.state.show ? <div className = {styles.navi__hidden}>
                { this.data.map((v,i)=>{
                    return <div>{v}</div>
                })}
            </div> : null}
        </div>
    }
}

export default Navi