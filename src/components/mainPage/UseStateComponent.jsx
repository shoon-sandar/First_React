import React from 'react'
import { Link } from 'react-router-dom'
const UseStateComponent = () => {
    return (
        <div>
            <Link to={"/useState"} className='text-xl bg-slate-100 w-[150px] h-[35px] flex items-center p-4 rounded-xl shadow shadow-black/30 mb-2'>UseState</Link>
            <div className='flex flex-col bg-slate-200 p-4 gap-2 rounded-xl'>
                <Link to={"/useState?idc"} className='bg-slate-100 p-2 rounded-xl'> Increase and Decrease Count </Link>
                <Link to={"/useState?cal"} className='bg-slate-100 p-2 rounded-xl'>Calculator</Link>
                <Link to={"/useState?tdl"} className='bg-slate-100 p-2 rounded-xl'>To Do List</Link>
                <Link className='bg-slate-100 p-2 rounded-xl'>Student Registration</Link>

            </div>
        </div>
    )
}

export default UseStateComponent