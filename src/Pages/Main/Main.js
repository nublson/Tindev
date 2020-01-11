import React, { useEffect, useState } from 'react'
import api from '../../services/api'

import './Main.scss'

import logo from '../../assets/logo.svg'
import like from '../../assets/like.svg'
import dislike from '../../assets/dislike.svg'

const Main = ({ match }) => {
	const [devs, setDevs] = useState([])

	useEffect(() => {
		async function loadUsers() {
			const response = await api.get('/devs', {
				headers: {
					user: match.params.id
				}
			})

			setDevs(response.data)
		}

		loadUsers()
	}, [match.params.id])

	return (
		<div className='main-container'>
			<img src={logo} alt='Tindev' />

			<ul>
				{devs.map(dev => (
					<li key={dev._id}>
						<img src={dev.avatar} alt='' />
						<footer>
							<strong>{dev.name}</strong>
							<p>{dev.bio}</p>
						</footer>

						<div className='buttons'>
							<button type='button'>
								{' '}
								<img src={dislike} alt='Dislike' />{' '}
							</button>
							<button type='button'>
								{' '}
								<img src={like} alt='Like' />{' '}
							</button>
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Main
