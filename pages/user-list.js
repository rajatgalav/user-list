import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ParentContainer from '../component/parenetConainer';

export default function UserList() {
    const [userList, setUserList] = useState([])

    useEffect(() => {
        const list = JSON.parse(localStorage.getItem('user_list'))
        setUserList(list ? list : [])
    }, [])

    return (
		<ParentContainer>
			<div className="form-container px-5 d-table">
                <ul className="d-column">
                    <li>index</li>
                    <li>Name</li>
                    <li>Email</li>
                </ul>
				{ userList.map((user, i) =>
                    <ul key={i} className="d-column">
                        <li>{i+1}</li>
                        <li>{user.name}</li>
                        <li>{user.email}</li>
                    </ul>
                )}
			</div>
		</ParentContainer>
    )
}
