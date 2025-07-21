import React, { useState } from 'react'

const Calculator = () => {
    const [num1, setnum1] = useState(0)
    const [num2, setnum2] = useState(0)
    const [res, setres] = useState(0)
    return (
        <div className=''>
            <div className='text-2xl font-bold my-4'>Calculator</div>
            <div className='bg-slate-100 w-fit p-4 rounded-xl'>
                <div>Enter Two Number</div>
                <div className='flex justify-between p-4 items-center'>
                    <input value={num1} onChange={(e) => setnum1(parseInt(e.target.value))} type="number" className='bg-slate-200 w-[70px] py-2 border-2 border-black/10 outline-0 rounded-xl pl-2 text-xl ' />
                    <div>The Result is <span className='font-bold text-xl'>{res}</span></div>
                    <input value={num2} onChange={(e) => setnum2(parseInt(e.target.value))} type="number" className='bg-slate-200 w-[70px] py-2 border-2 border-black/10 outline-0 rounded-xl pl-2 text-xl ' />
                </div>
                <div className='gap-2 grid grid-cols-5  p-2'>
                    <button className='bg-blue-400 p-2 rounded-lg' onClick={() => setres(num1 + num2)}>Add</button>
                    <button className='bg-red-400 p-2 rounded-lg' onClick={() => setres(num1 - num2)}>Subtract</button>
                    <button className='bg-amber-400 p-2 rounded-lg' onClick={() => setres(num1 * num2)}>Multiply</button>
                    <button className='bg-teal-400 p-2 rounded-lg' onClick={() => setres(num1 / num2)}>Divide</button>
                    <button className='bg-neutral-400 p-2 rounded-lg' onClick={() => setres(num1 % num2)}>Modulo</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator