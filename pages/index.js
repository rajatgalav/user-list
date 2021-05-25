import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import NotificationManager from 'react-notifications/lib/NotificationManager';
import ParentContainer from '../component/parenetConainer';

export default function Home() {
	const [userEmail, setUserEmail] = useState('')
	const [userPassword, setUserPassword] = useState('')
	
	const router = useRouter()

	const userLogin = () => {
		if(!userEmail) { NotificationManager.error('Please enter email') }
        else if(!userPassword) { NotificationManager.error('Please enter password') }
        else {
			const userList = JSON.parse(localStorage.getItem('user_list'))
			console.log('userList', userList)
			if(!userList) { NotificationManager.error('Account does not exist') }
			else {
				let index = null
				userList.forEach((account, i) => {
					if(account.email === userEmail) {
						index = i
						return
					}
				})
				console.log('index', index)
				if(index === null) { NotificationManager.error('Account does not exist') }
				else {
					if(userList[index].password != userPassword) {
						NotificationManager.error('Password do not match')
					} else {
						NotificationManager.success('Login successful')
						router.push('/user-list')
					}
				}
			}
        }
	}

    return (
		<ParentContainer>
			<div className="form-container px-5">
				<div>
					<h3>Welcome back</h3>
					<div>Please login to your account</div>
				</div>
				<div className="user-form">
					<input type="email" placeholder="username" value={userEmail} onChange={(e)=>setUserEmail(e.target.value)} />
					<input type="password" placeholder="password" value={userPassword} onChange={(e)=>setUserPassword(e.target.value)} />
				</div>
				<button className="action-button" onClick={userLogin}>Login</button>
				<Link href='/register'>Create your account</Link>
			</div>
		</ParentContainer>
    )
}
