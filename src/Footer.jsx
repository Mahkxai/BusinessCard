import React from 'react'
import { twitter, facebook, instagram, github } from './'

const Footer = () => {
	return (
		<footer className='socials'>
			<img src={twitter} alt='twitter' />
			<img src={facebook} alt='facebook' />
			<img src={instagram} alt='instagram' />
			<img src={github} alt='github' />
		</footer>
	)
}

export default Footer
