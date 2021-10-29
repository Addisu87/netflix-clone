import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { auth } from '../firebase';
import Nav from '../Nav';
import PlansScreen from './PlansScreen';
import './ProfileScreen.css';

function ProfileScreen() {
	const user = useSelector(selectUser);
	return (
		<div className='profileScreen'>
			<Nav />
			<div className='profileScreen__body'>
				<h1>Edit Profile</h1>
				<div className='profileScreen__info'>
					<img
						src='https://occ-0-3189-300.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbme8JMz4rEKFJhtzpOKWFJ_6qX-0y5wwWyYvBhWS0VKFLa289dZ5zvRBggmFVWVPL2AAYE8xevD4jjLZjWumNo.png?r=a41'
						alt=''
					/>
					<div className='profileScreen__details'>
						<h2>{user.email}</h2>
						<div className='profileScreen__plans'>
							<h3>Plans</h3>

							<PlansScreen />

							<button
								onClick={() => auth.signOut()}
								className='profileScreen__signOut'
							>
								Sign Out
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProfileScreen;
