import React from 'react'
import { useState } from 'react'

function TodoForm() {
    const [input, setInput] = useState('');
  return (
    <form action="" className='form__todo'>
        <input type='text' placeholder='add a todo' value={input} name='text' className='form__input'></input>
        <button className='form__button'>Add a task</button>
    </form>
  )
}

export default TodoForm