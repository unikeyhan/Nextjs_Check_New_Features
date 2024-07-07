import { NextResponse } from 'next/server';
import { updateTodo } from '../route';

export async function GET() {
    return NextResponse.json({ messge: 'Update page' }, { status: 200 });
}

export default function handler(req, res) {
    if (req.method === 'POST') {
        let { id, name, isDone } = JSON.parse(req.body);
        updateTodo({ id, isDone: Boolean(isDone) });
        res.status(200).json({ msg: 'todo updated' });
    } else {
        res.status(400).json({ msg: 'invalid request method' });
    }
}
