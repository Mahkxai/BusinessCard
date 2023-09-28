import React from 'react'
import headshot from './assets/headshot.jpg'

const Header = () => {
	return (
		<>
			<div className='img-container'></div>
			<header>
				<h1>Hardik Shrestha</h1>
				<p>Independent Android Developer</p>
				<a href='#'>mahkxai.com</a>
				<div className='contacts'>
					<button
						className='contact-buttons'
						id='email'
						onClick={() => {
							window.location = "mailto:shr.hardik@gmail.com";
						}}
					>
						Email
					</button>
					<button
						className='contact-buttons'
						id='linkedin'
						onClick={() => window.open('https://www.linkedin.com/in/hardikshr')}
					>
						LinkedIn
					</button>
				</div>
			</header >
		</>
	)
}

export default Header
