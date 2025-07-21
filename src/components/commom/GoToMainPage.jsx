import React from 'react'
import { RxCaretLeft } from 'react-icons/rx'
import { Link } from 'react-router-dom'
const GoToMainPage = () => {
    return (

        <div className='bg-slate-100 rounded-xl flex items-center p-4 '>

            <Link to={"/"} className='flex'>
                <div className='text-2xl'><RxCaretLeft /></div>
                Main Page</Link>
        </div>

    )
}

export default GoToMainPage