'use client';
import React from 'react';
async function update(id, isDone) {
    await fetch('http://localhost:3000/api/data/update', {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify({ id, isDone }),
    });
}

const Lists = ({ todo }) => {
    return (
        <div>
            <input type='checkbox' onChange={(e) => update(todo.id, e.target.checked)} checked={todo.isDone} />
            {todo.name}
            <button>delete</button>
        </div>
    );
};

export default Lists;
