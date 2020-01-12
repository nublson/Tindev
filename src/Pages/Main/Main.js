import React, { useEffect, useState } from 'react'
import io from 'socket.io-client'
import { Link } from 'react-router-dom'
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

	useEffect(() => {
		const socket = io(process.env.REACT_APP_BACKEND_URL, {
			query: { user: match.params.id }
		})

		socket.on('match', dev => {
			console.log(dev)
		})
	}, [match.params.id])

	async function handleLike(targetDevId) {
		await api.post(`devs/${targetDevId}/likes`, null, {
			headers: {
				user: match.params.id
			}
		})

		setDevs(devs.filter(dev => dev._id !== targetDevId))
	}

	async function handleDislike(targetDevId) {
		await api.post(`devs/${targetDevId}/dislikes`, null, {
			headers: {
				user: match.params.id
			}
		})

		setDevs(devs.filter(dev => dev._id !== targetDevId))
	}

	return (
		<div className='main-container'>
			<Link to='/'>
				<img src={logo} alt='Tindev' />
			</Link>

			{devs.length > 0 ? (
				<ul>
					{devs.map(dev => (
						<li key={dev._id}>
							<img src={dev.avatar} alt='' />
							<footer>
								<strong>{dev.name}</strong>
								<p>{dev.bio}</p>
							</footer>

							<div className='buttons'>
								<button
									type='button'
									onClick={() => handleDislike(dev._id)}
								>
									{' '}
									<img src={dislike} alt='Dislike' />{' '}
								</button>
								<button
									type='button'
									onClick={() => handleLike(dev._id)}
								>
									{' '}
									<img src={like} alt='Like' />{' '}
								</button>
							</div>
						</li>
					))}
				</ul>
			) : (
				<div className='empty'>
					<p>Empty! </p>
				</div>
			)}
		</div>
	)
}

export default Main
