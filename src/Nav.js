import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './Nav.css';

function Nav() {
	const [show, handleShow] = useState(false);
	const history = useHistory();

	const transitionNavBar = () => {
		if (window.scrollY > 100) {
			handleShow(true);
		} else {
			handleShow(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', transitionNavBar);
		return () => window.removeEventListener('scroll', transitionNavBar);
	}, []);

	return (
		<div className={`nav ${show && 'nav__black'}`}>
			<div className='nav__contents'>
				<img
					onClick={() => history.push('/')}
					className='nav__logo'
					src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
					alt=''
				/>
				<img
					onClick={() => history.push('/profile')}
					className='nav__avatar'
					src='https://occ-0-3189-300.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbme8JMz4rEKFJhtzpOKWFJ_6qX-0y5wwWyYvBhWS0VKFLa289dZ5zvRBggmFVWVPL2AAYE8xevD4jjLZjWumNo.png?r=a41'
					alt=''
				/>
			</div>
		</div>
	);
}

export default Nav;
