import styles from './styles.module.css'
import {Link} from 'react-router-dom'

function Home() {
	return (
		<div className={styles.container}>
			<h1 className={styles.main_logo}>Quizz</h1>
			<div className={styles.context}>
				<div className={styles.left}>
					<h1 className={styles.logo}>Why Quizz?</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, aut molestias? Molestias nobis odit inventore voluptates.
						Soluta, consectetur assumenda! Beatae numquam unde, earum culpa deleniti maiores natus, sunt tenetur nisi praesentium aperiam
						velit nostrum odio dolores ipsum! Nam amet corrupti fugiat commodi dolorem nemo a impedit tenetur minima? Rerum numquam dolorem
						laborum deleniti excepturi, eius distinctio sit nihil. Labore, architecto harum illum, deserunt natus temporibus animi maiores
						similique laudantium totam maxime dolorum minus laborum quam neque quaerat fugit. Placeat culpa, ab consequatur ea, debitis in
						sunt accusamus provident eum a doloribus excepturi sit quod quidem at distinctio quae? Incidunt iusto deleniti rerum eius
						repellat illum. Placeat culpa, ab consequatur ea, debitis in sunt accusamus provident eum a doloribus excepturi sit quod quidem
						at distinctio quae? Incidunt iusto deleniti rerum eius repellat illum.
					</p>
				</div>
				<div className={styles.line}></div>
				<div className={styles.right}>
					<h1 className={styles.logo}>Why Quizz?</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, aut molestias? Molestias nobis odit inventore voluptates.
						Soluta, consectetur assumenda! Beatae numquam unde, earum culpa deleniti maiores natus, sunt tenetur nisi praesentium aperiam
						velit nostrum odio dolores ipsum! Nam amet corrupti fugiat commodi dolorem nemo a impedit tenetur minima? Rerum numquam dolorem
						laborum deleniti excepturi, eius distinctio sit nihil. Labore, architecto harum illum, deserunt natus temporibus animi maiores
						similique laudantium totam maxime dolorum minus laborum quam neque quaerat fugit. Placeat culpa, ab consequatur ea, debitis in
						sunt accusamus provident eum a doloribus excepturi sit quod quidem at distinctio quae? Incidunt iusto deleniti rerum eius
						repellat illu.
					</p>
					<Link to={`/tests`} className={styles.btn}>Start Now</Link>
				</div>
			</div>
		</div>
	)
}

export default Home