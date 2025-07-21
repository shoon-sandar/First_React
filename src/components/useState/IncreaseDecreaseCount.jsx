import React, { useState } from 'react'

const IncreaseDecreaseCount = () => {
    const [count, setcount] = useState(0)
    return (
        <div>
            <div className='text-xl font-bold mt-2 mb-4'>Increase Decrease Count</div>
            <div className='bg-slate-100 w-fit flex flex-col items-center p-4 rounded-xl'>
                <div className={`${count > 0 ? 'bg-blue-300 border-2 border-blue-400' : 'bg-red-300 border-2 border-red-400'} w-[50px] h-[50px] flex items-center justify-center text-2xl text-white rounded-xl`}>{count}</div>
                <div className='flex gap-6 text-white p-2'>
                    <div className='bg-blue-400 p-2 rounded-lg cursor-pointer active:bg-blue-300' onClick={() => setcount(count + 1)}>Increase</div>
                    <div className='bg-red-400 p-2 rounded-lg cursor-pointer active:bg-blue-300' onClick={() => setcount(count - 1)}>Decrease</div>
                </div>
            </div>

        </div>
    )
}

export default IncreaseDecreaseCount