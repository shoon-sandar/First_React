import { useState } from 'react'

const ToDoList = () => {
    const [textinput, settextinput] = useState()
    const [todos, settodos] = useState([])
    const [inprograss, setinprograss] = useState([])
    const [complete, setcomplete] = useState([])
    const [edit, setedit] = useState(false)
    const [id, setid] = useState()
    const [whichDiv, setWhichDiv] = useState()
    const handelDeleteItem = (id, div) => {
        let itemToDelete
        let functionToDelete
        if (div === "todo") {
            itemToDelete = todos
            functionToDelete = settodos
        }
        else if (div === "progress") {
            itemToDelete = inprograss
            functionToDelete = setinprograss
        }
        else {
            itemToDelete = complete
            functionToDelete = setcomplete
        }

        const itemAfterDelete = itemToDelete.filter(item => item.id !== id)
        functionToDelete(itemAfterDelete)
    }
    return (
        <div>
            <div className='text-2xl font-bold'>To Do List</div>
            <div className='bg-slate-100 flex flex-col items-center justify-center rounded-xl p-4'>

                <form className='flex gap-2 p-4' onSubmit={(e) => {
                    e.preventDefault()
                    if (edit) {
                        let itemToUpdate
                        let functionToUpdate
                        if (whichDiv === "todo") {
                            itemToUpdate = todos
                            functionToUpdate = settodos
                        } else if (whichDiv === "progress") {
                            itemToUpdate = inprograss
                            functionToUpdate = setinprograss

                        } else {
                            itemToUpdate = complete
                            functionToUpdate = setcomplete
                        }
                        const updatedItems = itemToUpdate.map(item => item.id === id ?
                            {
                                id: new Date().toLocaleTimeString(),
                                title: textinput
                            }
                            :
                            item
                        )
                        functionToUpdate(updatedItems)
                        setedit(false)
                        setid()
                        setWhichDiv()
                    } else {
                        settodos([...todos, {
                            id: new Date().toLocaleTimeString(),
                            title: textinput
                        }])
                    }

                    settextinput('')
                }}>
                    <input value={textinput} onChange={(e) => settextinput(e.target.value)} type="text" className='border-2 border-black/20 p-2 bg-slate-200 rounded-xl outline-0' />
                    <button className='bg-blue-400 p-2 text-white rounded-xl px-4'>{
                        edit ? 'Update' : 'Add'
                    }</button>
                    <div>{
                        whichDiv
                    }</div>
                </form>
                <div className='grid grid-cols-3 w-full gap-8 '>
                    <div className='bg-blue-300 rounded-xl p-2 '>
                        <div className='bg-blue-400 text-white p-2 rounded-xl'>To Do</div>
                        <div className='p-2 flex flex-col gap-2'>
                            {
                                todos.map((todo, index) => (
                                    <div key={index} className='bg-blue-200 p-2 rounded-xl'>
                                        <div className='text-xl'>
                                            {todo.title}
                                            <div>
                                                {todo.id}
                                            </div>
                                        </div>
                                        <div className='grid grid-cols-4 mt-2 gap-2 text-sm'>
                                            <button className='bg-blue-300 rounded-xl p-2 cursor-pointer active:opacity-40'
                                                onClick={() => {
                                                    settextinput(todo.title)
                                                    setedit(true)
                                                    setid(todo.id)
                                                    setWhichDiv("todo")
                                                }}>Edit</button>
                                            <button className='bg-red-200 rounded-xl p-2 cursor-pointer active:opacity-40'
                                                onClick={() => handelDeleteItem(todo.id, "todo")}
                                            >Delete</button>
                                            <button className='bg-amber-200 rounded-xl p-2 cursor-pointer active:opacity-40'
                                                onClick={() => {
                                                    setinprograss([...inprograss, todo])
                                                    handelDeleteItem(todo.id, "todo")
                                                }}
                                            >Progress</button>
                                            <button className='bg-green-200 rounded-xl p-2 cursor-pointer active:opacity-40'
                                                onClick={() => {
                                                    setcomplete([...complete, todo])
                                                    handelDeleteItem(todo.id, "todo")
                                                }}>Complete</button>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className='bg-amber-300 rounded-xl p-2 '>
                        <div className='bg-amber-400 text-white p-2 rounded-xl'>In Progess</div>
                        <div className='p-2 flex flex-col gap-2'>
                            {
                                inprograss.map((prograss, index) => (
                                    <div key={index} className='bg-amber-200 p-2 rounded-xl'>
                                        <div className='text-xl'>
                                            {prograss.title}
                                            <div>
                                                {prograss.id}
                                            </div>
                                        </div>
                                        <div className='grid grid-cols-4 mt-2 gap-2 text-sm'>
                                            <button className='bg-blue-300 rounded-xl p-2 cursor-pointer active:opacity-40'
                                                onClick={() => {
                                                    settextinput(prograss.title)
                                                    setedit(true)
                                                    setid(prograss.id)
                                                    setWhichDiv("progress")
                                                }}>Edit</button>
                                            <button className='bg-red-200 rounded-xl p-2 cursor-pointer active:opacity-40'
                                                onClick={() => handelDeleteItem(prograss.id, "progress")}
                                            >Delete</button>

                                            <button className='bg-green-200 rounded-xl p-2 cursor-pointer active:opacity-40'
                                                onClick={() => {
                                                    setcomplete([...complete, prograss])
                                                    handelDeleteItem(prograss.id, "progress")
                                                }}
                                            >Complete</button>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className='bg-green-300 rounded-xl p-2 '>
                        <div className='bg-green-400 text-white p-2 rounded-xl'>Completed</div>
                        <div className='p-2 flex flex-col gap-2'>
                            {
                                complete.map((complete, index) => (
                                    <div key={index} className='bg-green-200 p-2 rounded-xl'>
                                        <div className='text-xl'>
                                            {complete.title}
                                            <div>
                                                {complete.id}
                                            </div>
                                        </div>
                                        <div className='grid grid-cols-4 mt-2 gap-2 text-sm'>
                                            <button className='bg-blue-300 rounded-xl p-2 cursor-pointer active:opacity-40'
                                                onClick={() => {
                                                    settextinput(complete.title)
                                                    setedit(true)
                                                    setid(complete.id)
                                                    setWhichDiv("Complete")
                                                }}>Edit</button>
                                            <button className='bg-red-200 rounded-xl p-2 cursor-pointer active:opacity-40'
                                                onClick={() => handelDeleteItem(complete.id, "complete")}
                                            >Delete</button>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ToDoList