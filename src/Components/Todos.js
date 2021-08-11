import React from 'react'
import { IndividualTodo } from './IndividualTodo'
import './todo.css';

export const Todos = ({todos, deleteTodo, editModal}) => {
    return(
    
     todos.map((individualTodo)=>(
         
             
        <IndividualTodo individualTodo={individualTodo} 
        key={individualTodo.id} deleteTodo={deleteTodo}
            editModal={editModal}
        />
       
     )
    
    )

    )
}