import { useState } from 'react'
import { useTest } from '../../context/TestContext'
import {useParams} from 'react-router-dom'
import QuizDetail from '../../Components/QuizDetail'
import styles from './styles.module.css'

function Quiz() {
    const [ready, setReady] = useState(false)
    const {tests} = useTest()
    const {id} = useParams()

    return (
        <div className={styles.container}>
            { !ready && 
            <div className={styles.ready}>
                <h1>{tests[id].title}</h1>
                <p>Num of Question: {tests[id].numOfQuestion}</p>
                <p>Difficlty Level: {tests[id].difficultyLevel}</p>
                <p>*Questions cannot be left blank.</p>
                <button onClick={() => setReady(true)}>Ready</button>                
            </div>            
            }

            {
                ready && 
                <div className={styles.content}>
                    <QuizDetail test={tests[id]}/>
                </div>
            }            
        </div>
    )
}

export default Quiz