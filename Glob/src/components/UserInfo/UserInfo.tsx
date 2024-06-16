import React, { FC } from 'react'
import { IUser } from '../../Models/IUser'

const UserInfo: FC<{ item: IUser, setOpen: Function }> = ({ item, setOpen }) => {
    return (
        <div className='user_info'>
            <div className="user_info_head">
                <h1>{item.name}</h1>
                <svg onClick={() => setOpen(false)} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.585786 0.585786C1.36683 -0.195262 2.63317 -0.195262 3.41421 0.585786L10 7.17157L16.5858 0.585786C17.3668 -0.195262 18.6332 -0.195262 19.4142 0.585786C20.1953 1.36683 20.1953 2.63317 19.4142 3.41421L12.8284 10L19.4142 16.5858C20.1953 17.3668 20.1953 18.6332 19.4142 19.4142C18.6332 20.1953 17.3668 20.1953 16.5858 19.4142L10 12.8284L3.41421 19.4142C2.63317 20.1953 1.36683 20.1953 0.585786 19.4142C-0.195262 18.6332 -0.195262 17.3668 0.585786 16.5858L7.17157 10L0.585786 3.41421C-0.195262 2.63317 -0.195262 1.36683 0.585786 0.585786Z" fill="black" />
                </svg>
            </div>
            <div>
                <div className='user_info_item'>
                    <b>Телефон:</b>
                    <p>{item.phone}</p>
                </div>
                <div className='user_info_item'>
                    <b>Почта:</b>
                    <p>{item.email}</p>
                </div>
                <div className='user_info_item'>
                    <b>Дата приема:</b>
                    <p>{item.hire_date}</p>
                </div>
                <div className='user_info_item'>
                    <b>Должность:</b>
                    <p>{item.department}</p>
                </div>
                <div className='user_info_item'>
                    <b>Подразделение:</b>
                    <p>{item.department}</p>
                </div>
            </div>
            <div className="user_info_foot">
                <h2>Дополнительная информация:</h2>
                <p>Разработчики используют текст в качестве заполнителя макта страницы. Разработчики используют текст в качестве заполнителя макта страницы.</p>
            </div>
        </div>
    )
}

export default UserInfo
