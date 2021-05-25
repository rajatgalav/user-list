import Head from 'next/head'
import { useState } from 'react';
import { useRouter } from 'next/router'
import NotificationManager from 'react-notifications/lib/NotificationManager';
import ParentContainer from '../component/parenetConainer';


export default function RegisterUser() {
    const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userMobile, setUserMobile] = useState('')
    const [userPassword, setUserPassword] = useState('')

    const router = useRouter()

    const registerUser = () => {
        if(!userName) { NotificationManager.error('Please enter name') }
        else if(!userEmail) { NotificationManager.error('Please enter email') }
        else if(!userMobile) { NotificationManager.error('Please enter contact number') }
        else if(!userPassword) { NotificationManager.error('Please enter password') }
        else {
            let userList = JSON.parse(localStorage.getItem('user_list'))
            let formData = {}
            formData['name'] = userName
            formData['email'] = userEmail
            formData['mobile'] = userMobile
            formData['password'] = userPassword
            if(userList) { userList.push(formData) }
            else { userList = [formData] }
            console.log('userList', userList)
            localStorage.setItem('user_list', JSON.stringify(userList))
            router.push('/')
        }
    }

    return (
        <ParentContainer>
            <div className="form-container px-5">
                <div>
                    <h3>Welcome</h3>
                    <div>Please register yourself</div>
                </div>
                <div className="user-form">
                    <input type="name" placeholder="name" value={userName} onChange={(e)=>setUserName(e.target.value)}/>
                    <input type="email" placeholder="username" value={userEmail} onChange={(e)=>setUserEmail(e.target.value)} />
                    <input type="number" placeholder="contact number" value={userMobile} onChange={(e)=>setUserMobile(e.target.value)}/>
                    <input type="password" placeholder="password" value={userPassword} onChange={(e)=>setUserPassword(e.target.value)} />
                </div>
                <button className="action-button" onClick={registerUser}>Register</button>
            </div>
        </ParentContainer>
    )
}