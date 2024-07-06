import React from 'react';
import Lists from './Lists';

const getTodos = async()=>{
    let todos = await fetch('http://localhost:3001/api/data');
    return todos.json();

}

const List =async () => {
    const {todos} = await getTodos();
    console.log(todos)

  return (
    <div className='list' >
        <ul>
            {todos.map((t)=>{
                return(
                    <li>
                        <Lists todo={t}/>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default List