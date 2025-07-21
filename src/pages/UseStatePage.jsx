import React from 'react'
import GoToMainPage from '../components/commom/GoToMainPage'
import IncreaseDecreaseCount from '../components/useState/IncreaseDecreaseCount'
import Calculator from '../components/useState/Calculator'
import ToDoList from '../components/useState/ToDoList'
const UseStatePage = () => {
    return (
        <div className='p-4'>
            <GoToMainPage />
            <div className='text-2xl mt-4'>UseState</div>
            <IncreaseDecreaseCount />
            <Calculator />
            <ToDoList />

        </div>

    )
}

export default UseStatePage