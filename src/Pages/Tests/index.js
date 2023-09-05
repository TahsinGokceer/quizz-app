import React from 'react'
import { useTest } from '../../context/TestContext'
import Card from '../../Components/Card'
import styles from './styles.module.css'

function Tests() {
	const {tests} = useTest()

	return (
		<div>
			<h1 className={styles.title}>Tests</h1>

			<div className={styles.tests}>
				{
					tests.map((test, i) => <Card key={i} id={i} value={test}/>)
				}
			</div>			
		</div>
	)
}

export default Tests