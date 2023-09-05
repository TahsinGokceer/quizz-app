import React from 'react'
import styles from './styles.module.css'

function Contact() {
	return (
		<div className={styles.contact}>
			<h1 className={styles.title}>Contact Us</h1>
			<div className={styles.line}></div>
			<div className={styles.main}>
				<div className={styles.context}>
					<div className={styles.phone}>
						<i className="fa-solid fa-phone fa-2xl"></i>
						<h3>By Phone</h3>
						<p>+90 505 090 4542</p>						
					</div>
					<div className={styles.email}>
						<i className="fa-solid fa-envelope fa-2xl"></i>
						<h3>By Email</h3>
						<p>tgokceer@gmail.com</p>
					</div>
				</div>
				<div className={styles.social_links}>
					<a className={styles.link} href="https://www.instagram.com/tahsingokceer/"><i id={styles.instagram} className="fa-brands fa-instagram fa-2xl"></i></a>
					<a className={styles.link} href="https://twitter.com/Tahsingokceer"><i id={styles.twitter} className="fa-brands fa-twitter fa-2xl"></i></a>
					<a className={styles.link} href="https://github.com/TahsinGokceer"><i id={styles.github} className="fa-brands fa-github fa-2xl"></i></a>
					<a className={styles.link} href="https://www.linkedin.com/in/tahsin-g%C3%B6k%C3%A7eer-190b15249/"><i id={styles.linkedin} className="fa-brands fa-linkedin fa-2xl"></i></a>
				</div>
			</div>
		</div>
	)
}

export default Contact