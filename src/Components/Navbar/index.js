import { Link } from 'react-router-dom'
import styles from './styles.module.css'

function Navbar() {
  return (
    <>
        <div className={styles.navbar}>
            <div className={styles.left}>
                <div className={styles.logo}>
                    <h1><Link to="/">Quizz</Link></h1>
                </div>                
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/tests">Tests</Link></li>
                    <li><Link to="/contact">Contact</Link></li>                    
                </ul>                
            </div>
            <div className={styles.right}>
                <Link to="/edit-question">Add Question</Link>
            </div>
        </div>

        <hr />
    </>
  )
}

export default Navbar