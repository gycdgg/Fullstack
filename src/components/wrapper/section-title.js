import React,{Component} from 'react'
import styles from './styles.styl'
class SectionTitle extends Component {
    render() {
        const {title,titleEng} = this.props;
        return <div className={styles.section__title}>
            <span>{title}</span>
            <p className={styles.section__title__desc}>{titleEng}</p>
        </div>
    }
}

export default SectionTitle;