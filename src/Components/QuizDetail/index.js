import { useState } from 'react'
import {Link} from 'react-router-dom'
import styles from '../../Pages/Quiz/styles.module.css'

function QuizDetail({test}) {
    const [sayac, setSayac] = useState(0)
    const [final, setFinal] = useState(false)
    const [correctAns, setCorrectAns] = useState(0)
    const [answer, setAnswer] = useState(undefined)
    const [check, setCheck] = useState()

    const nextBtn = () => {
        if(answer !== undefined){
            test.test[sayac].answer = answer
            if (answer === test.test[sayac].correct) {
                setCorrectAns(correctAns + 1)
            }

            if (sayac < test.numOfQuestion - 1) {
                setSayac(sayac + 1)
                setAnswer(undefined)
            } else {
                setFinal(true)
            }

            check.target.checked = false
        }else{
            alert("Sorular boş bırakılamaz.")
        }
        
    }

    const onChange = (e) => {
        if(e.target.checked){
            setAnswer(e.target.id)
        }
    }  
    
    const prevBtn = () => {
        if(sayac > 0){
            setSayac(sayac - 1)
            check.target.checked = false
        }else{
            alert("İlk soru")
        }

        if(test.test[sayac === 0 ? 0 : sayac - 1].answer === test.test[sayac === 0 ? 0 : sayac - 1].correct){
            setCorrectAns(correctAns - 1)
        }
    }

    return (
        <>
            {!final && 
                <>
                    <h3>{test.test[sayac].question}</h3>
                    <ul>
                        <li>
                            <input type="radio" id='a' name="answer" onChange={(e) => {onChange(e); setCheck(e)}} />
                            <label>{test.test[sayac].a}</label>
                        </li>
                        <li>
                            <input type="radio" id='b' name="answer" onChange={(e) => {onChange(e); setCheck(e)}} />
                            <label>{test.test[sayac].b}</label>
                        </li>
                        <li>
                            <input type="radio" id='c' name="answer" onChange={(e) => {onChange(e); setCheck(e)}} />
                            <label>{test.test[sayac].c}</label>
                        </li>
                        <li>
                            <input type="radio" id='d' name="answer" onChange={(e) => {onChange(e); setCheck(e)}} />
                            <label>{test.test[sayac].d}</label>
                        </li>
                    </ul>
                    <div className="buttons">
                        <button className={styles.prev} onClick={prevBtn}>Prev</button>
                        <button className={styles.next} onClick={nextBtn}>Next</button>
                    </div>
                </>
            }

            {
                final && 
                <>
                    <h1>Exam is Over</h1>
                    <h4>Total Questions : {test.numOfQuestion}</h4>
                    <h4>Number of Correct : {correctAns}</h4>
                    <h4>Number of Wrong : {test.numOfQuestion - correctAns}</h4>
                    <h4>Success Percentage : {100 * correctAns / test.numOfQuestion}</h4>
                    <Link to="/tests">Leave the Exam</Link>
                </>
            }
        </>
    )
}

export default QuizDetail