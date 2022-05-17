import React from 'react'
// SERVER SIDE RENDERING
export async function getServerSideProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await res.json();
    return {
        props: {
            todos: data
        }
    }
}
export default function Todos({ todos }) {
    return (
        <div>
            {todos?.length === 0 ? <div>Loading...</div> :
                (todos?.map(todo => (
                    <div key={todo.id}>
                        <div>{todo.title}</div>
                    </div>
                )))}
        </div>
    )
}
