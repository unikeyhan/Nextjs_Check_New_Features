// app/api/data/route.js
import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

let todos = [
  {
    id: uuidv4(),
    name: 'Learn Next.js',
    isDone: false,
  },
  {
    id: uuidv4(),
    name: 'Learn HTML',
    isDone: false,
  },
  {
    id: uuidv4(),
    name: 'Start new sideproject',
    isDone: false,
  },
];

export async function GET(request) {
  return NextResponse.json({ todos });
}

export async function POST(request) {
  const { name } = await request.json();
  const newTodo = {
    id: uuidv4(),
    name,
    isDone: false,
  };
  todos.push(newTodo);
  return NextResponse.json({ todo: newTodo });
}

export const DELETE = async (request) => {
  const { id } = await request.json();
  todos = todos.filter((obj) => obj.id !== id);
  return NextResponse.json({ message: 'Todo deleted' });
};

export const PATCH = async (request) => {
  const { id, isDone } = await request.json();
  todos = todos.map((obj) =>
    obj.id === id ? { ...obj, isDone } : obj
  );
  return NextResponse.json({ message: 'Todo updated' });
};