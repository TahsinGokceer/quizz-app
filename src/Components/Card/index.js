import styles from './styles.module.css'
import {Link} from 'react-router-dom'

function index({ value, id }) {

    return (
        <div className={styles.box}>
            <div className={styles.photo}>
                <img src={`${value.photos}`} alt="" />
            </div>
            <div className={styles.context}>
                <h3 className={styles.title}>{value.title}</h3>
                <p>Num of Question: {value.numOfQuestion}</p>
                <p>Difficulty Level: {value.difficultyLevel}</p>
            </div>
           <Link to={`/quiz/${id}`} className={styles.btn}>Start</Link>
        </div>
    )
}

export default index