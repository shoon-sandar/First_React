import React from 'react'
import UseStateComponent from '../components/mainPage/UseStateComponent'
import sm from '../assets/images/sm.jpeg'
const MainPage = () => {
    return (
        <div className='p-4' >

            <div className='flex flex-col items-center'>
                <img src={sm} alt="" className='w-[50px] h-[50px] rounded-full animate-spin' />
                <h1 className='text-3xl mb-6'>My First React</h1>
                <div className='text-xl'>Shoon Shoon</div>
            </div>
            <UseStateComponent />
            <LoginForm />

        </div>
    )
}

export default MainPage